const API_URL = "https://balikpapan-1-api.up.railway.app";


//get
const fetchCarts = async () => {
    const CartsContainer = document.getElementById("coba")

    const Cart = await fetch(`${API_URL}/cart`)
    const data = await Cart.json()
    console.log(data)
    //clear

    //pake data.data karena di api nya json nya ada message, baru data
    //jadi data ke-1 dari line 7 (await Cart.json())
    //data ke-2 dari struktur api nya

    //GET
    data.data.forEach((element) => {
        console.log(element)
        const newCarts = document.createElement('tr')
        newCarts.id = "addedProduct";
        newCarts.classList.add()
        let prices= Number(element.product.price);
        let qtys= Number(element.quantity);
        let subtotal= Number(prices * qtys);
        newCarts.innerHTML = `
            <td><a href="#"><i class="uil uil-minus-circle"></i></a></i></td>
            <td><img src="${element.product.image}" alt=""></td>
            <td>${element.product.productname}</td>
            <td>$${prices}</td>
            <td>${qtys}</td>
            <td>$${subtotal}</td>`

        
        CartsContainer.appendChild(newCarts)
        
    })

    CartsContainer

};

// const fetchSubtotal = async () => {
//     const totalContainer = document.getElementById("subtotal")

//     const Cart = await fetch(`${API_URL}/cart`)
//     const data = await Cart.json()
//     console.log(data)
    //clear

    //pake data.data karena di api nya json nya ada message, baru data
    //jadi data ke-1 dari line 7 (await Cart.json())
    //data ke-2 dari struktur api nya

    //GET
//     data.data.forEach((element) => {
//         console.log(element)
//         const totals = document.createElement('table')
//         totals.id = "total";
//         totals.classList.add()
//         let prices= Number(element.product.price);
//         let qtys= Number(element.quantity);
//         let subtotal= Number(prices * qtys);
//         subtotal.for((total) => {
//             total += total;
//             total.innerHTML = `
//             <tr>
//             <td>Cart Subtotal</td>
//             <td>$ ${element.product.price * element}</td>
//             </tr>
//             <tr>
//                 <td>Shipping</td>
//                 <td>Free</td>
//             </tr>
//             <tr>
//                 <td><Strong>Total</Strong></td>
//                 <td><Strong>$ 123</Strong></td>
//             </tr>`

            
//             CartsContainer.appendChild(newCarts)


//         })
            
        
//     })

//     CartsContainer

// };

fetchCarts()
// fetchSubtotal()






// //coba POST

//POST coba
// const addToCart = await fetch(`${API_URL}/shop/:productId`);
// const data = await addToCart.json()
// console.log(data)
// Loop 
// async function addToCart() {
//     const product = document.getElementById("coba");
  
//     try {
//       const addToCart = await fetch(`${API_URL}/cart`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(product)
//     })
//     const response = await addToCart.json();
  
//     if (response.success) {
//       await addToCart(); // Refresh the message list after adding a new message
//     } else {
//       console.error(error);
//     }
//     } catch (error) {
//       console.error('Error adding message:', error);
//     }
//   }

//   addToCart()










// const fetchCarts = async () => {}
//     const CartsContainer = document.getElementById("coba")

//     const Cart = await fetch(`${API_URL}/cart`)
//     const data = await Cart.json()
//     console.log(data)
//             Loop through the cart items
//             data.forEach(cartItem => {
//                 // For each cart item, retrieve the corresponding product data
//                 // Replace 'product_api_url' with the actual endpoint URL to retrieve data from the 'product' table
//                 fetch(`product_api_url?id=${cartItem.product_id}`)
//                     .then(response => response.json())
//                     .then(productData => {
//                         // Create HTML elements to display product information
//                         const productContainer = document.getElementById('cart');
//                         const productDiv = document.createElement('div');
//                         productDiv.innerHTML = `
//                             <img src="${productData.image}" alt="${productData.productName}">
//                             <h2>${productData.productName}</h2>
//                             <p>Price: $${productData.price}</p>
//                             <p>Quantity: ${cartItem.quantity}</p>
//                         `;
//                         productContainer.appendChild(productDiv);
//                     })
//                     .catch(error => console.error(error));
//             });
//         })
//         .catch(error => console.error(error));
// });

// }
