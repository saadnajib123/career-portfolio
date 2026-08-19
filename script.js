// Tab Switching System
function openTab(evt, tabName) {
    const tabContents = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove("active");
    }

    const tabBtns = document.getElementsByClassName("tab-btn");
    for (let i = 0; i < tabBtns.length; i++) {
        tabBtns[i].classList.remove("active");
    }

    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
}

// PDF Download Generator using html2pdf.js
function downloadPDF(elementId, filename) {
    const element = document.getElementById(elementId);
    const opt = {
        margin:       0.5,
        filename:     filename,
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().set(opt).from(element).save();
}

// Render Big Five Personality Assessment Chart
document.addEventListener("DOMContentLoaded", function () {
    const ctx = document.getElementById('bigFiveChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Neuroticism', 'Extraversion', 'Openness', 'Agreeableness', 'Conscientiousness'],
            datasets: [{
                label: 'Big Five Inventory Scores',
                data: [65, 81, 76, 83, 99],
                backgroundColor: [
                    '#a855f7',
                    '#3b82f6',
                    '#ec4899',
                    '#f59e0b',
                    '#10b981'
                ]
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
});