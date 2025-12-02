document.addEventListener('DOMContentLoaded', function() {
    // Function to check if an element is in view
    function isInView(element) {
        if (!element) return false; // Return false if the element is null
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Function to handle scroll event
    function handleScroll() {
        const scrollUpButton = document.querySelector('.scroll-up');
        const keyTechHeading = document.querySelector('#key-technologies h2');

        console.log('Scroll Up Button:', scrollUpButton);
        console.log('Key Technologies Heading:', keyTechHeading);

        if (!scrollUpButton) {
            console.error("Scroll-up button not found.");
            return;
        }

        const scrollPosition = window.scrollY + window.innerHeight;
        const threshold = document.documentElement.scrollHeight - 200;

        // Show or hide the scroll-up button based on the scroll position
        if (scrollPosition >= threshold) {
            scrollUpButton.style.display = 'flex'; 
        } else {
            scrollUpButton.style.display = 'none'; 
        }

        // Show or hide the key technologies heading based on its visibility
        if (keyTechHeading) {
            if (isInView(keyTechHeading)) {
                keyTechHeading.classList.add('in-view');
            } else {
                keyTechHeading.classList.remove('in-view');
            }
        } else {
            console.error("html issue.");
        }
    }

    // Attach scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Run on page load to check initial view state
    handleScroll();

    // JavaScript for Smooth Scroll
    const scrollUpButton = document.querySelector('.scroll-up');
    if (scrollUpButton) {
        scrollUpButton.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default anchor behavior
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // Smooth scroll
            });
        });
    }
});
console.log(document.body.innerHTML); // Log the entire HTML to check for the section
