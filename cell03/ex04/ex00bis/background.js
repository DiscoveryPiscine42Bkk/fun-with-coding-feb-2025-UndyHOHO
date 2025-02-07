$(document).ready(function() {
    
    $("#change-bg-btn").click(function() {
        
        const randomColor = getRandomColor();
        
        // Change the background color of the body
        $("body").css("background-color", randomColor);
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
});
