window.addEventListener('resize', function() {
    var menuLabels = document.querySelectorAll('.menu-label');
    var isFullScreen = window.innerWidth === screen.width && window.innerHeight === screen.height;

    if (isFullScreen) {
        menuLabels.forEach(function(label) {
            label.style.display = 'block';
        });
    } else {
        menuLabels.forEach(function(label) {
            label.style.display = 'none';
        });
    }
});
