
//toggle menu

const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu-container");

menuToggle.addEventListener("click", () => {
    if(menu.style.display == "block"){
        menu.style.display = "none";
    }else if(menu.style.display == "none"){
        menu.style.display = "block";
    }
});


// menubuttons

const breakfast = document.querySelector('.Breakfast');
const breakfastMenu = document.querySelector('.menu-breakfast');
const typeWriter = document.querySelector('.typewriter');

breakfast.addEventListener('click', () => {
    if(breakfastMenu.style.display == "none" && typeWriter.style.display == "block"){
        breakfastMenu.style.display = "block";
        typeWriter.style.display = "none";
    } else if(breakfastMenu.style.display == "block" && typeWriter.style.display == "none"){
        breakfastMenu.style.display = "none";
        typeWriter.style.display = "block";
    }
})


