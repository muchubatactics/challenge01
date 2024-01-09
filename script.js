/*
    listen to love me again by john newman when reading the code. 0_^
 */
(function() {
    let clickedSquares = [];
    Array.from(document.querySelectorAll('.square')).forEach((square) => {
        square.onclick = function() {
            if (this.getAttribute('data-clicked') == 'yes') return;
            clickedSquares.push(this);
            this.setAttribute('data-clicked', 'yes');
            checkCompletion();
        };
    });

    function checkCompletion() {
        if (clickedSquares.length == 6)
        {
            let copy = clickedSquares;
            clickedSquares = [];
            let temp = 1;
            for (let i = copy.length - 1; i >= 0; i--)
            {
                setTimeout(function() {
                    copy[i].setAttribute('data-clicked', 'no');
                }, temp * 1000);
                temp++;
            }
        }
    };
}());