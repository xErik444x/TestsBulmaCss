window.onload = () => {
    setTimeout(() => {
        let pageloader = document.querySelector(".pageloader");
        pageloader.classList.remove("is-active");
        setTimeout(() => {
            let pageloader = document.querySelector(".pageloader");
            pageloader.remove("is-active");
        }, 1200);
    }, 800);

}

let products = document.querySelectorAll(".product");

let animDur = 0.4;
products.forEach(p => {
    p.style.setProperty('--animate-duration', (animDur += 0.2) + "s");
    p.classList.add("animate__animated");
    p.classList.add("animate__backOutDown");


})

let welcome = document.querySelector("#welcome");

window.addEventListener("scroll", () => {

    scrollpos = window.scrollY;

    products.forEach(p => {
        if (scrollpos >= p.offsetHeight) {

            p.classList.add("animate__fadeInUp");
            p.classList.remove("animate__backOutDown");

        } else {
            p.classList.add("animate__backOutDown");
            p.classList.remove("animate__fadeInUp");

        }

    })

})