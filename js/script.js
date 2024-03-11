document.addEventListener("DOMContentLoaded", function() {
    const carouselSlide = document.querySelector(".carousel-slide");
    const images = document.querySelectorAll(".carousel-slide img");

    let counter = 0;
    const slideWidth = images[0].clientWidth;

    function nextSlide() {
        if (counter >= images.length - 1) return;
        counter++;
        carouselSlide.style.transition = "transform 0.5s ease-in-out";
        carouselSlide.style.transform = `translateX(-${counter * slideWidth}px)`;
    }

    function prevSlide() {
        if (counter <= 0) return;
        counter--;
        carouselSlide.style.transition = "transform 0.5s ease-in-out";
        carouselSlide.style.transform = `translateX(-${counter * slideWidth}px)`;
    }

    function autoSlide() {
        setInterval(() => {
            if (counter >= images.length - 1) {
                counter = 0;
                carouselSlide.style.transition = "none";
                carouselSlide.style.transform = `translateX(0)`;
            } else {
                nextSlide();
            }
        }, 4000); // Change the interval as needed (in milliseconds)
    }

    autoSlide();
});




  // Function to check if the element is in the viewport
  function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Function to handle scrolling animation
  function handleScrollAnimation() {
    var element = document.getElementById('who-we-are');
    var cardContainers = document.querySelectorAll('.card-container');

    // Trigger animation when the section is in the viewport
    if (isInViewport(element)) {
      cardContainers[0].style.animationPlayState = 'running';
      cardContainers[1].style.animationPlayState = 'running';
    }
  }

  // Event listener for scroll
  window.addEventListener('scroll', function() {
    handleScrollAnimation();
  });

  // Call the function initially to check if the section is in the viewport
  handleScrollAnimation();






  
  const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
    counter.innerText = '0'

    const updateCounter = () => {
        const target = counter.getAttribute('data-target')
        const c = +counter.innerText

        const increment = target / 200

        if(c < target){
            counter.innerText = `${Math.ceil(c + increment)}`
            setTimeout(updateCounter, 1)
        } else {
            counter.innerText = target
        }
    }

    updateCounter()
})




const left = document.querySelector('.left')
const right = document.querySelector('.right')
const container = document.querySelector('.container')

left.addEventListener('mouseenter', () => container.classList.add('hover-left'))
left.addEventListener('mouseleave', () => container.classList.remove('hover-left'))

right.addEventListener('mouseenter', () => container.classList.add('hover-right'))
right.addEventListener('mouseleave', () => container.classList.remove('hover-right'))

