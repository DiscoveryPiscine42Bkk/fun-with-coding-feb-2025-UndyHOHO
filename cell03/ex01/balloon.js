// balloon.js
let balloon = document.getElementById("balloon");

let currentSize = 200; // Initial size of the balloon
let currentColorIndex = 0; // Index for color cycle
const colors = ['red', 'green', 'blue']; // Colors in order for the click event

// Function to handle the click event (grow the balloon and change color)
balloon.addEventListener('click', function() {
    // Increase size by 10px
    currentSize += 10;
    
    // If the balloon exceeds 420px, it explodes and resets
    if (currentSize > 420) {
        currentSize = 200; // Reset to original size
    }

    // Update the balloon's size and color
    balloon.style.width = currentSize + 'px';
    balloon.style.height = currentSize + 'px';
    balloon.style.backgroundColor = colors[currentColorIndex];
    
    // Cycle through the colors
    currentColorIndex = (currentColorIndex + 1) % colors.length;
});

// Function to handle mouse enter and leave events (shrink and reverse color cycle)
balloon.addEventListener('mouseenter', function() {
    // Shrink the balloon by 5px but not below 200px
    if (currentSize > 200) {
        currentSize -= 5;
    }
    
    // Update the balloon's size and color (reverse order)
    balloon.style.width = currentSize + 'px';
    balloon.style.height = currentSize + 'px';
    currentColorIndex = (currentColorIndex - 1 + colors.length) % colors.length; // Reverse color change
    balloon.style.backgroundColor = colors[currentColorIndex];
});

balloon.addEventListener('mouseleave', function() {
    // Same logic as mouse enter: shrink by 5px and reverse color
    if (currentSize > 200) {
        currentSize -= 5;
    }
    
    // Update the balloon's size and color
    balloon.style.width = currentSize + 'px';
    balloon.style.height = currentSize + 'px';
    currentColorIndex = (currentColorIndex - 1 + colors.length) % colors.length;
    balloon.style.backgroundColor = colors[currentColorIndex];
});
