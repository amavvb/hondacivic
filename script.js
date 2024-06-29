var items = document.querySelectorAll('.slider .list .item');
var next = document.getElementById('next');
var prev = document.getElementById('prev');

// Config parameters
var countItem = items.length;
var itemActive = 0;

function showSlider() {
    items.forEach(function(item, index) {
        if (index === itemActive) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

// Event next click
next.onclick = function() {
    itemActive = (itemActive + 1) % countItem;
    showSlider();
};

// Event prev click
prev.onclick = function() {
    itemActive = (itemActive - 1 + countItem) % countItem;
    showSlider();
};

// Auto run slider
var refreshInterval = setInterval(function() {
    next.click();
}, 10000);

// Initialize slider
showSlider();

function newPicture(id) {
    if (id === 'image1') {
        document.getElementById(id).src = "torquenew.png";
    } else if (id === 'image2') {
        document.getElementById(id).src = "powernew.png";
    } else if (id === 'image3') {
        document.getElementById(id).src = "fuelnew.png";
    }
}

function oldPicture(id) {
    if (id === 'image1') {
        document.getElementById(id).src = "power.png";
    } else if (id === 'image2') {
        document.getElementById(id).src = "torque.png";
    } else if (id === 'image3') {
        document.getElementById(id).src = "fuel.png";
    }
}
let uniqueCurrentSlide = 0;
const uniqueSlides = document.querySelectorAll('.unique-slide');
const uniqueTotalSlides = uniqueSlides.length;
const slidesToShow = 3;
const uniqueSlider = document.querySelector('.unique-slider');

function updateSliderPosition() {
  uniqueSlider.style.transform = `translateX(-${(uniqueCurrentSlide * 100) / slidesToShow}%)`;
}

function uniqueShowSlide(n) {
  uniqueCurrentSlide = (n + uniqueTotalSlides) % uniqueTotalSlides;
  updateSliderPosition();
}

function uniquePrevSlide() {
  uniqueShowSlide(uniqueCurrentSlide - 1);
}

function uniqueNextSlide() {
  uniqueShowSlide(uniqueCurrentSlide + 1);
}

// Uncomment the setInterval line to enable auto-sliding
// setInterval(uniqueNextSlide, 5000); // Change slide every 5 seconds (5000 milliseconds)

updateSliderPosition();
// Music on hover
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.section').forEach((card, index) => {
        const audioId = `audio-${index + 1}`;
        const audioElement = document.getElementById(audioId);
        if (audioElement) {
            console.log(`Adding hover events to card ${index + 1}`);
            card.addEventListener('mouseenter', () => {
                console.log(`Playing audio ${audioId}`);
                audioElement.play();
            });

            card.addEventListener('mouseleave', () => {
                console.log(`Pausing and resetting audio ${audioId}`);
                audioElement.pause();
                audioElement.currentTime = 0; // Reset the audio to the start
            });
        } else {
            console.warn(`No audio element found for card ${index + 1}`);
        }
    });
});

