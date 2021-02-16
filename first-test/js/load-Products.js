window.onload = () => {
    setTimeout(() => {
        let pageloader = document.querySelector(".pageloader");
        pageloader.classList.remove("is-active");
    }, 800);
}

let products = document.querySelectorAll(".product");


products.forEach(p => {

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