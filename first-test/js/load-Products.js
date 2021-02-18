window.onload = () => {
    setTimeout(() => {
        let pageloader = document.querySelector(".pageloader");
        ponerAnimaciones();
        pageloader.classList.remove("is-active");
        setTimeout(() => {
            let pageloader = document.querySelector(".pageloader");
            pageloader.remove("is-active");
        }, 1200);
    }, 800);
}
function ponerAnimaciones() {


    let products = document.querySelectorAll(".product");
    let firstProduct = products[0];
    let desactivar = false;
    let animDur = 0.4;
    products.forEach(p => {
        p.style.setProperty('--animate-duration', (animDur += 0.4) + "s");
        p.classList.add("animate__animated");
        p.classList.add("animate__backOutDown");
    })
    let welcome = document.getElementById("welcome");

    window.addEventListener("scroll", () => {
        scrollpos = window.scrollY;
        console.log(scrollpos + " " + welcome.offsetHeight)
        if (scrollpos >= welcome.offsetHeight + 270) {
            products.forEach(p => {


                p.classList.add("animate__fadeInUp");
                p.classList.remove("animate__backOutDown");

            })
            desactivar = true;
        } else if (desactivar) {
            products.forEach(p => {
                p.classList.add("animate__backOutDown");
                p.classList.remove("animate__fadeInUp");
            })
            desactivar = false;
        }

    })
}