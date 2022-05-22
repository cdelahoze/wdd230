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
const opciones2 = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' }
document.querySelector('#update2').textContent = upDate2.toLocaleDateString('en-au', opciones2);


// make onclick of the top nav

document.getElementById("demo").onclick = function() {myFunction()};

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

