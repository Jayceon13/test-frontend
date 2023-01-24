const objects = document.querySelectorAll(".compositions-2, .compositions-1, .product-compositions-img, .block-composition-product");
if(objects.length > 0){
    window.addEventListener("scroll", () => {
        objects.forEach(object => {
            const scrollPosition = window.scrollY + window.innerHeight;
            const objectPosition = object.getBoundingClientRect().top + scrollPosition;

            if (objectPosition < scrollPosition + window.innerHeight) {
                object.classList.add("animate");
            }
        });
    });
}

let slideIndex = 0;
const slides = document.getElementsByClassName("block-review-1");
const timeout = 5000;

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("current");
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].classList.add("current");
    setTimeout(showSlides, timeout);
}
showSlides();

let timeLeft = 1800; // 30 minutes in seconds
let countdownTimer = document.getElementById("timer");
let countDown = setInterval(function() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    countdownTimer.innerHTML = minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
    if (--timeLeft < 0) {
        clearInterval(countDown);
        countdownTimer.innerHTML = "Expired";
    }
}, 1000);

$(document).ready(function() {
    $("#name").focus(function() {
        $(this).before('<span class="example">Пример: Иван Иванов</span>');
    }).blur(function() {
        $(this).prev('.example').remove();
    });

    $("#phone").focus(function() {
        $(this).after('<span class="example">Пример: +1 (123) 456-7890</span>');
    }).blur(function() {
        $(this).next('.example').remove();
    });
});
const btnclick = document.querySelectorAll('.btn');

btnclick.forEach(button => {
    button.addEventListener('click', scrollButtonClick)
});

const formscroll = document.querySelector('form');

function scrollButtonClick() {
    if(formscroll) {
        formscroll.scrollIntoView({behavior: "smooth"});
    }
}
