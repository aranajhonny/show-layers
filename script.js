[].forEach.call(
    document.querySelectorAll('*'),
    function(a) {
        a.style.outline = '1px solid hsl(' + Math.random() * 360 +', 100%, 50%)';
    }
)

