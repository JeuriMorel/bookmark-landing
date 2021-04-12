const hamburger = document.getElementById('hamburger');
const closeNav = document.getElementById('closeNav');
const nav = document.getElementById('nav');
const body = document.getElementById('body');

const bookmarking = document.getElementById('bookmarking');
const searching = document.getElementById('searching');
const sharing = document.getElementById('sharing');

const email = document.getElementById('email');
const form = document.getElementById('form');
const btn = document.getElementById('form-btn');

const slides = document.querySelectorAll('.features__slide');



const slideBtns = [bookmarking, searching, sharing]

const handleNav = () => {
    nav.classList.toggle('open');
    hamburger.classList.toggle('open');
    body.classList.toggle('open');
}

const handleSlide = (e) => {
    slides.forEach((x) => {
        if (x.classList.contains(`slide-${e.target.id}`)) {
            x.classList.remove('hide')
        } else {
            x.classList.add('hide')
        }
    })
    
    slideBtns.forEach((x) => {
        if (x.id === e.target.id) {
            x.parentNode.classList.add('open')
        } else {
            x.parentNode.classList.remove('open')
        }
    })
    
}



form.addEventListener("submit", (e) => {
    e.preventDefault();
    form.classList.remove("error");
    email.value = "";
});


document.addEventListener(
  "invalid",
  (function () {
    return function (e) {
        e.preventDefault();
        form.classList.add("error");
      email.focus();
    };
  })(),
  true
);




hamburger.addEventListener('click', handleNav);
closeNav.addEventListener('click', handleNav);

bookmarking.addEventListener('click', handleSlide);
searching.addEventListener('click', handleSlide);
sharing.addEventListener('click', handleSlide);


//Accordian

const handleShow = (e) => {
    let text = e.currentTarget.nextElementSibling;
    e.currentTarget.lastElementChild.classList.toggle("open");

    text.classList.toggle('show');

    if (text.classList.contains('show')) {

        text.style.display = "block";
        let height = text.clientHeight;
        text.style.display = "";
        text.style.display = "block";
        text.style.height = 0;
        
        setTimeout(() => {
            text.style.height = height + 'px';
        }, 1);


    } else {
        setTimeout(() => {
            text.style.height = 0;
        }, 1);
        setTimeout(() => {
            text.style.height = '';
            text.style.display = '';
        }, 300);

    }


};


document.querySelectorAll(".question").forEach((item) => {
    item.addEventListener("click", handleShow);
});



