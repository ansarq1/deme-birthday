        let currentSlide = 0;
        const slides = document.querySelectorAll('.slide');
        const slideshow = document.getElementById('slideshow');
        const videoContainer = document.getElementById('video-container');

        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.remove('active');
                if (i === index) {
                    slide.classList.add('active');
                }
            });

            if (index < slides.length - 1) {
                setTimeout(() => {
                    showSlide(index + 1);
                }, 3000); // Change slide every 3 seconds
            } else {
                setTimeout(endSlideshow, 3000); // End after the last slide
            }
        }

        function endSlideshow() {
            slideshow.style.display = 'none';
            videoContainer.style.display = 'block';
        }

        window.onload = showSlide(currentSlide)