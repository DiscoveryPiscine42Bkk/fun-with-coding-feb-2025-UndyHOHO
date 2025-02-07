// balloon.js
$(document).ready(function() {
    let $balloon = $('#balloon');
    let currentSize = 200;
    let currentColorIndex = 0;
    const colors = ['red', 'green', 'blue'];

    // Function to handle click event (grow the balloon and change color)
    $balloon.on('click', function() {
        currentSize += 10;
        
        if (currentSize > 420) {
            currentSize = 200;
        }
        
        $balloon.css({
            width: currentSize + 'px',
            height: currentSize + 'px',
            backgroundColor: colors[currentColorIndex]
        });

        currentColorIndex = (currentColorIndex + 1) % colors.length;
    });

    // Function to handle mouse enter and leave events (shrink and reverse color cycle)
    function shrinkBalloon() {
        if (currentSize > 200) {
            currentSize -= 5;
        }
        
        currentColorIndex = (currentColorIndex - 1 + colors.length) % colors.length;
        
        $balloon.css({
            width: currentSize + 'px',
            height: currentSize + 'px',
            backgroundColor: colors[currentColorIndex]
        });
    }

    $balloon.on('mouseenter', shrinkBalloon);
    $balloon.on('mouseleave', shrinkBalloon);
});

