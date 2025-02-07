// background.js
document.getElementById("change-bg-btn").addEventListener("click", function() {
    // Generate a random color
    const randomColor = getRandomColor();
    
    // Set the body's background color to the generated random color
    document.body.style.backgroundColor = randomColor;
});

// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
