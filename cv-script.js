// Render CV section
async function renderCV() {
    try {
        const response = await fetch('data/cv.yaml');
        const yamlText = await response.text();
        const cvSections = jsyaml.load(yamlText);
        const container = document.getElementById('cv-container');
        
        const cvHTML = cvSections.map(section => {
            let html = `<div class="cv-section">
                <h2 class="cv-section-title">${section.title}</h2>`;
            
            if (section.type === 'map') {
                // General Information - map format
                html += section.contents.map(item => `
                    <div class="cv-map">
                        <div class="cv-map-name">${item.name}:</div>
                        <div class="cv-map-value">${item.value}</div>
                    </div>
                `).join('');
            } else if (section.type === 'time_table') {
                // Education and Experience - time table format
                html += section.contents.map(item => {
                    let itemHtml = `
                        <div class="cv-timetable-item">
                            <div class="cv-timetable-title">${item.title}</div>
                            <div class="cv-timetable-institution">${item.institution || ''}</div>
                            <div class="cv-timetable-year">${item.year || ''}</div>`;
                    
                    if (item.description && Array.isArray(item.description)) {
                        itemHtml += `<div class="cv-timetable-description">
                            <ul>${item.description.map(desc => `<li>${desc}</li>`).join('')}</ul>
                        </div>`;
                    }
                    
                    itemHtml += `</div>`;
                    return itemHtml;
                }).join('');
            } else if (section.type === 'list') {
                // Other Interests - list format
                html += `<ul class="cv-list">${section.contents.map(item => `<li>${item}</li>`).join('')}</ul>`;
            }
            
            html += `</div>`;
            return html;
        }).join('');
        
        container.innerHTML = cvHTML;
        // Colorize links immediately after rendering
        colorizeLinksInElement(container);
    } catch (error) {
        console.error('Error loading CV data:', error);
    }
}

// Bright colors for links
const brightColors = [
    '#4ec9b0', // teal/cyan
    '#ff6b9d', // pink
    '#ffd93d', // yellow
    '#6bcf7f', // green
    '#ff8c42', // orange
    '#9b59b6', // purple
    '#3498db', // blue
    '#e74c3c', // red
    '#1abc9c', // turquoise
    '#f39c12', // amber
    '#e91e63', // magenta
    '#00bcd4', // cyan
];

// Randomly assign colors to all links
function colorizeLinks() {
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        const randomColor = brightColors[Math.floor(Math.random() * brightColors.length)];
        link.style.color = randomColor;
    });
}

// Colorize links in a specific element (for immediate coloring after rendering)
function colorizeLinksInElement(element) {
    const links = element.querySelectorAll('a');
    links.forEach(link => {
        const randomColor = brightColors[Math.floor(Math.random() * brightColors.length)];
        link.style.color = randomColor;
    });
}

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    renderCV();
    
    // Colorize any remaining links (like nav links) after a short delay
    setTimeout(colorizeLinks, 50);
});

