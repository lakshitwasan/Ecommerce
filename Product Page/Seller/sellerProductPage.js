function onClickMenu() {
    document.getElementById("menu").classList.toggle("icon");
    document.getElementById("nav").classList.toggle("change");
}

const stars = document.getElementsByClassName("star-change");
const starDiv = document.getElementById("product-star-review");

starDiv.addEventListener("mouseover", (event) => {
    const hoveredStarIndex = [...stars].indexOf(event.target);

    for (let i = 0; i <= hoveredStarIndex; i++) {
        stars[i].classList.add("fa-solid");
        stars[i].classList.remove("fa-regular");
        stars[i].style.color = "gold";
    }

    for (let i = hoveredStarIndex + 1; i < stars.length; i++) {
        stars[i].classList.remove("fa-solid");
        stars[i].classList.add("fa-regular");
        stars[i].style.color = "black";
    }
});

starDiv.addEventListener("mouseleave", () => {
    for (const star of stars) {
        star.classList.remove("fa-solid");
        star.classList.add("fa-regular");
        star.style.color = "black";
    }
});
