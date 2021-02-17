window.onload = () => {
    let products = document.getElementsByClassName("product");

    let animDur = 0.4;

    console.log(products);
    for (let index = 0; index < products.length; index++) {
        const p = products[index];
        p.style.setProperty('--animate-duration', (animDur += 0.2) + "s");
        p.classList.add("animate__animated");
        p.classList.add("animate__backOutDown");

    }
    // products.forEach(p => {


    // })




    setTimeout(() => {
        let pageloader = document.querySelector(".pageloader");
        pageloader.classList.remove("is-active");
        setTimeout(() => {
            let pageloader = document.querySelector(".pageloader");
            pageloader.remove("is-active");
        }, 1200);
    }, 800);

}


window.addEventListener("scroll", () => {

    let products = document.getElementsByClassName("product");

    let welcome = document.getElementById("anim-start");
    console.log(welcome);


    let animado = false;
    scrollpos = window.scrollY;
    console.log(scrollpos);
    if (scrollpos >= welcome.offsetHeight && !animado) {
        console.log("-------------------AÑADIENDO")
        for (let index = 0; index < products.length; index++) {
            const p = products[index];
            p.classList.add("animate__animated");
            p.classList.add("animate__backOutDown");

        }
        animado = true;
    } else if (scrollpos < (welcome.offsetHeight) && animado) {
        for (let index = 0; index < products.length; index++) {
            const p = products[index];

            p.style.setProperty('--animate-duration', (animDur += 0.2) + "s");
            p.classList.add("animate__animated");
            p.classList.add("animate__backOutDown");

        }
        animado = false;
    }


})