document.addEventListener("DOMContentLoaded", function() {
    const red1 = document.querySelector('.red1');
    const red2 = document.querySelector('.red2');
    const leftButton = document.getElementById('lijevo');
    const rightButton = document.getElementById('desno');
    const rightButtonImg = rightButton.querySelector('img');
    const leftButtonImg = leftButton.querySelector('img');
    const imageWidth = 175; 
    const marginWidth = 10; 
    const step = imageWidth + marginWidth;

    function updateButtons() {
        const isAtStart = red1.scrollLeft <= 0;
        const isAtEnd = red1.scrollWidth - red1.scrollLeft <= red1.clientWidth;

        leftButton.disabled = isAtStart;
        rightButton.disabled = isAtEnd;

        rightButtonImg.src = isAtEnd ? "slike/arrow-gray-right.png" : "slike/arrow-blue-right.png";
        leftButtonImg.src = isAtStart ? "slike/arrow-gray-left.png" : "slike/arrow-blue-left.png";
    }

    rightButton.addEventListener('click', function() {
        red1.scrollBy({
            left: step,
            behavior: 'smooth'
        });
        red2.scrollBy({
            left: step,
            behavior: 'smooth'
        });
        updateButtons();
    });

    leftButton.addEventListener('click', function() {
        red1.scrollBy({
            left: -step,
            behavior: 'smooth'
        });
        red2.scrollBy({
            left: -step,
            behavior: 'smooth'
        });
        updateButtons();
    });

    updateButtons();
});