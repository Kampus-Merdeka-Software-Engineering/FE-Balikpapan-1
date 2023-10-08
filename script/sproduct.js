const API_URL = "https://balikpapan-1-api.up.railway.app";

const urlParams = new URLSearchParams(window.location.search);
const itemId = urlParams.get('id');
const titleProduct = document.getElementById("title-product");
const priceElement = document.getElementById("price");
const imageProduct = document.getElementById("image-product");
const productDescription = document.getElementById("product-description");
const detailsAPI = `${API_URL}/shop/${itemId}`;


// Fetch detailed data based on the ID and display it
const fetchDetails = async () => {
    try {
        const response = await fetch(detailsAPI);
        if (!response.ok) {
            throw new Error("Network response was not ok.");
        }
        const data = await response.json();
        console.log(data);

        // Update the elements with data from the API
        titleProduct.textContent = data.data.productname;
        priceElement.textContent = `$ ${data.data.price}`;
        imageProduct.src = data.data.image;



    } catch (error) {
        console.error("Error fetching details:", error);
    }
};

fetchDetails();


//ADD TO CART
const addToCartButton = document.getElementById("add-to-cart-button");

addToCartButton.addEventListener("click", () => {
    const selectedQuantity = parseInt(document.querySelector("input[type='number']").value, 10);

    if (selectedQuantity > 0) {
        const cartData = {
            productId: itemId,
            quantity: selectedQuantity
        };

        //POST request
        fetch(`${detailsAPI}/cart`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(cartData)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to add the product to the cart.");
            }
            console.log("Product added to the cart successfully!");
        })
        .catch(error => {
            console.error("Error adding the product to the cart:", error);
        });
    } else {
        // if user not select valid quantity
        console.error("Please select a valid quantity before adding to the cart.");
    }
});
