let scrollbarContainer = document.querySelector(".gallery");

let arrowNext = document.getElementById("arrow-next");
let arrowBack = document.getElementById("arrow-back");

scrollbarContainer.addEventListener("wheel", (e) => {
    scrollbarContainer.scrollLeft += e.deltaY;
    scrollbarContainer.style.scrollBehavior = "auto";  
});

arrowNext.addEventListener("click", () => {
    scrollbarContainer.style.scrollBehavior = "smooth";  
    scrollbarContainer.scrollLeft += 900;  
});

arrowBack.addEventListener("click", () => {
    scrollbarContainer.style.scrollBehavior = "smooth";  
    scrollbarContainer.scrollLeft -= 900; 
});



