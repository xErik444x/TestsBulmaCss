window.onload = () => {
    let products = document.querySelectorAll(".product");

    let animDur = 0.4;
    products.forEach(p => {
        p.style.setProperty('--animate-duration', (animDur += 0.2) + "s");
        p.classList.add("animate__animated");
        p.classList.add("animate__backOutDown");


    })

    let welcome = document.querySelector("#welcome");
    let animado = false;
    window.addEventListener("scroll", () => {

        scrollpos = window.scrollY;

        if (scrollpos >= (welcome.offsetHeight) && !animado) {
            products.forEach(p => {


                p.classList.add("animate__fadeInUp");
                p.classList.remove("animate__backOutDown");



            })
            animado = true;
        } else if (scrollpos < (welcome.offsetHeight) && animado) {
            products.forEach(p => {
                p.classList.remove("animate__fadeInUp");
                p.classList.add("animate__backOutDown");


            })
            animado = false;
        }


    })
    setTimeout(() => {
        let pageloader = document.querySelector(".pageloader");
        pageloader.classList.remove("is-active");
        setTimeout(() => {
            let pageloader = document.querySelector(".pageloader");
            pageloader.remove("is-active");
        }, 1200);
    }, 800);

}

