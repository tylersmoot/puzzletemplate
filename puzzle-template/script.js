let body = document.getElementsByTagName("body");
let navItem = document.querySelector(".navbar .nav-item");
let currentPos = window.scrollY;
let link = document.getElementsByClassName("nav-link");
let nav = document.querySelector(".navbar");
let brand = document.querySelector(".navbar-brand");
  



console.log(currentPos);


function scroll() {
   
  
 if (window.scrollY >= 75) {
 nav.style.background = "#337ab7";
     brand.style.color = "#fff";
    nav.style.opacity = "0.9";

 } 
 
 else {
    nav.style.background = "none";
    brand.style.color = "#337ab7";
    link[0].style.color = "#fff";
    link[1].style.color = "#fff";
    link[2].style.color = "#fff";
    link[3].style.color = "#fff";
    link[4].style.color = "#fff";
    link[0].borderTop = "none";
 }



 if(window.scrollY >= 0 && window.scrollY < 200) {
    link[0].style.color = "limegreen";
    link[0].style.borderTop = "2px solid limegreen";
} else {
    link[0].style.color = "#fff";
    link[0].style.borderTop = "none";
}


 
 if(window.scrollY > 200 && window.scrollY < 799) {
    link[1].style.color = "limegreen";
    link[1].style.borderTop = "2px solid limegreen";
} else {
    link[1].style.color = "#fff";
    link[1].style.borderTop = "none";
}




if(window.scrollY > 799 && window.scrollY < 1299) {
    link[2].style.color = "limegreen";
    link[2].style.borderTop = "2px solid limegreen";
} else {
    link[2].style.color = "#fff";
    link[2].style.borderTop = "none";
}


if(window.scrollY > 1299 && window.scrollY < 1925) {
    link[4].style.color = "limegreen";
    link[4].style.borderTop = "2px solid limegreen";
} else {
    link[4].style.color = "#fff";
    link[4].style.borderTop = "none";
}



    }



   





