

// Select all .zoom-img elements
const imageContainers = document.querySelectorAll('.zoom-img');

// Iterate over each image container
imageContainers.forEach(imageContainer => {
    const image = imageContainer.querySelector('img');

    // Add event listeners for each image container
    imageContainer.addEventListener('mousemove', (e) => {
        const rect = imageContainer.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const xPercent = (x / rect.width) * 100;
        const yPercent = (y / rect.height) * 100;

        image.style.transformOrigin = `${xPercent}% ${yPercent}%`;
    });

    imageContainer.addEventListener('mouseleave', () => {
        image.style.transformOrigin = 'center center';
    });
});
