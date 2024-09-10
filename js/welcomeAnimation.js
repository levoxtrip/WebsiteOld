document.addEventListener("DOMContentLoaded", () => {
    const textLines = document.querySelectorAll('.fade-in-text');
    textLines.forEach((line, index) => {
        line.style.setProperty('--delay', `${index * 1}s`);
    });
});


