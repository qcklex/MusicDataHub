document.addEventListener('DOMContentLoaded', () => {
    const graphContainers = document.querySelectorAll('.graph');

    graphContainers.forEach(graphContainer => {
        graphContainer.style.transition = 'transform 0.3s'; // Optional: Smooth transition
        graphContainer.style.transformOrigin = 'center'; // Ensure scaling from center
        graphContainer.style.transformOrigin = 'padding-bottom:100px'; // Ensure scaling from center


        graphContainer.addEventListener('mouseenter', () => {
            graphContainer.style.transform = 'scale(1.3)';
        });

        graphContainer.addEventListener('mouseleave', () => {
            graphContainer.style.transform = 'scale(1)';
        });
    });
});
