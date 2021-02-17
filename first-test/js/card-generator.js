let cardsMainProducts = document.querySelector(".cards-products");
let id = 0;

function generarCard(title, subtitle, imgUrl) {

    return (`<div class="column is-4">
        <div class="card product">
            <a href="#">
                <div class="card-image">
                    <figure class="image image-figure">
                        <img src="${imgUrl}"
                            alt="off">
                    </figure>
                </div>
                <div class="card-content">
                    <div class="media">

                        <div class="media-content">
                            <p class="title is-4">${title}</p>
                            <p class="subtitle is-6">${subtitle}</p>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    </div>
    `
    );
}
fetch("products.json").then(response => {
    return response.json();
}).then(json => {
    json.forEach(p => {
        cardsMainProducts.innerHTML += generarCard(p.name, p.price, p.imgUrl);
    })
})