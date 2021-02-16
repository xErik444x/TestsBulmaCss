let cardsMainProducts = document.querySelector(".cards-products");


function generarCard(title, subtitle, imgUrl) {
    return (`<div class="column">
        <div class="card product">
            <a href="#">
                <div class="card-image">
                    <figure class="image">
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

cardsMainProducts.innerHTML += generarCard("OFF!", "$1500", "https://off.com.ph/-/media/images/off/ph/products-en/products-landing/landing/off_overtime_product_collections_large_2x.jpg?la=en-ph");
cardsMainProducts.innerHTML += generarCard("Pingu (Bateria incluida)", "$500", "https://cloud10.todocoleccion.online/figuras-goma-pvc/tc/2015/02/08/05/47630802.jpg");
cardsMainProducts.innerHTML += generarCard("Pinguino", "$75500", "https://molaserfriki.com/wp-content/uploads/2020/09/figura-pinguino-dc-comics.jpg");


