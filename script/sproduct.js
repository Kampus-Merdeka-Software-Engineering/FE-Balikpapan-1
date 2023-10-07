const API_URL = "https://balikpapan-1-api.up.railway.app";

        const urlParams = new URLSearchParams(window.location.search);
        const itemId = urlParams.get('id');
        const titleProduct = document.getElementById("title-product");
        const priceElement = document.getElementById("price");
        const imageProduct = document.getElementById("image-product");
        const productDescription = document.getElementById("product-description");

        // Fetch detailed data based on the ID and display it
        const fetchDetails = async () => {
            try {
                const response = await fetch(`${API_URL}/shop/${itemId}`);
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