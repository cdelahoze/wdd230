// set current year in footer
const currentDate = new Date();
document.querySelector('#year').textContent = currentDate.getFullYear();

const upDate = new Date();
document.querySelector('#update').textContent = upDate;

const upDate2 = new Date();
document.querySelector('#update2').textContent = upDate2;

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

