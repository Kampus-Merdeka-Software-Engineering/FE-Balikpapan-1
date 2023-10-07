const API_URL = "https://balikpapan-1-api.up.railway.app";

const fetchProductsFeatured = async () => {
    const ProductsContainer = document.getElementById("pro-container");

    try {
        const response = await fetch(`${API_URL}/home/featured`);
        if (!response.ok) {
            throw new Error("Network response was not ok.");
        }
        const data = await response.json();

        data.data.forEach((element) => {
            const newProduct = document.createElement('div');
            newProduct.classList.add('pro');
            newProduct.innerHTML =`
                <img src="${element.image}" alt="">
                <div class="des">
                    <span>${element.brandname}</span>
                    <h5>${element.productname}</h5>
                    <div class="star">
                        <i class="uil uil-star"></i>
                        <i class="uil uil-star"></i>
                        <i class="uil uil-star"></i>
                        <i class="uil uil-star"></i>
                        <i class="uil uil-star"></i>
                    </div>
                    <h4>$${element.price}</h4>
                </div>
                <a href="#"><i class="uil uil-shopping-cart cart"></i></a>`;

            ProductsContainer.appendChild(newProduct);
        });
    } catch (error) {
        console.error("Error fetching and displaying products:", error);
    }
};

fetchProductsFeatured();

const fetchNewArrival = async () => {
    const ProductsContainer = document.getElementById("arrival-container");

    try {
        const response = await fetch(`${API_URL}/home/new-arrival`);
        if (!response.ok) {
            throw new Error("Network response was not ok.");
        }
        const data = await response.json();

        data.data.forEach((element) => {
            const newProduct = document.createElement('div');
            newProduct.classList.add('pro');
            newProduct.innerHTML =`
                <img src="${element.image}" alt="">
                <div class="des">
                    <span>${element.brandname}</span>
                    <h5>${element.productname}</h5>
                    <div class="star">
                        <i class="uil uil-star"></i>
                        <i class="uil uil-star"></i>
                        <i class="uil uil-star"></i>
                        <i class="uil uil-star"></i>
                        <i class="uil uil-star"></i>
                    </div>
                    <h4>$${element.price}</h4>
                </div>
                <a href="#"><i class="uil uil-shopping-cart cart"></i></a>`;

            ProductsContainer.appendChild(newProduct);
        });
    } catch (error) {
        console.error("Error fetching and displaying products:", error);
    }
};

fetchNewArrival();