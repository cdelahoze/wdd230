// set current year in footer
const currentDate = new Date();
document.querySelector('#year').textContent = currentDate.getFullYear();

const currentDate1 = new Date();
document.querySelector('#year1').textContent = currentDate1.getFullYear();

const upDate = new Date();
document.querySelector('#update').textContent = upDate.toLocaleString();

const upDate3 = new Date();
document.querySelector('#update3').textContent = upDate3.toLocaleString();

const upDate2 = new Date();
const opciones2 = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
document.querySelector('#update2').textContent = upDate2.toLocaleDateString('en-au', opciones2);


// make onclick of the top nav

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}

document.getElementById('demo').addEventListener('click', myFunction);

// banner 

const dia = new Date(); {
if (dia.getDay() == 1) {
    document.querySelector('#banner').style.display="block";
}

if (dia.getDay() == 4) {
    document.querySelector('#banner').style.display="block";
}
}

// lazy load efect

const imagesToLoad = document.querySelectorAll('img[data-src]');

const imgOptions = { threshold: 1, rootMargin: "0px 0px 50px 0px"};

const loadImages = (img) => {
  img.setAttribute('src', img.getAttribute('data-src'));
  img.onload = () => {
    img.removeAttribute('data-src');
  };
};


if('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items, observer) => {
      items.forEach((item) => {
        if(item.isIntersecting) {
          loadImages(item.target);
          observer.unobserve(item.target);
        }
      });
    }, imgOptions) ;
    imagesToLoad.forEach((img) => {
      observer.observe(img);
    });
  } else {
    imagesToLoad.forEach((img) => {
      loadImages(img);
    });
  } 
