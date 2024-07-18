const API__PRODUCTS = "https://dummyjson.com"
const wrapper = document.querySelector(".wrapper")
const loading = document.querySelector(".loading")


console.log(API__PRODUCTS);
console.log(wrapper);

async function fetchProducts(api) {
    try {
        loading.style.display = "flex"
        let respnonse = await fetch(`${api}/products`)
        console.log(respnonse);
        respnonse
                .json()
                .then((res)=> createCard(res))
                .catch((err)=> console.log(err)) 
                .finally(loading.style.display = "none"
                )     
    } catch (error) {
        console.log(error);
    }
}

fetchProducts(API__PRODUCTS)

function createCard(data) {
    data.products.forEach((product) => {
        console.log(data);
        console.log(product);
        let card = document.createElement("div")
        card.classList.add("card")
        console.log(card);
        card.innerHTML = `
            <img class="img" src="${product.thumbnail}" alt="">
            <div class="desc">
            <h3>${product.title}</h3>
            <p>${product.description}</p>
            </div>
            <div class="btn">
            <button>${"Fashion"}</button>
            <button>${"Products"}</button>
            </div>

        `

        wrapper.appendChild(card)
    }
);
}