//get
const fetchCarts = async () => {
    const CartsContainer = document.getElementById("coba")
    const subTotal = document.getElementById("sub-total")
    const id = localStorage.getItem('id')

    const Cart = await fetch(`${API_URL}/cart/${id}`)
    const data = await Cart.json()
    console.log(data)

    //GET
    let totalPrice = 0; // Initialize total price to 0

data.data.forEach((element) => {
  const prices = Number(element.product.price);
  const qtys = Number(element.quantity);
  const subtotal = prices * qtys;

  // Create a new table row
  const newCarts = document.createElement('tr');
  newCarts.id = "addedProduct";

  newCarts.innerHTML = `
    <td><a href="#"><i class="uil uil-minus-circle"></i></a></i></td>
    <td><img src="${element.product.image}" alt=""></td>
    <td>${element.product.productname}</td>
    <td>$${prices}</td>
    <td>${qtys}</td>
    <td>$${subtotal}</td>`
  ;

  // Append the new row to the table container
  CartsContainer.appendChild(newCarts);

  // Add the subtotal to the total price
  totalPrice += subtotal;
});

// Display the total price somewhere in your HTML (assuming you have an element with id "totalPrice" for this purpose)
subTotal.textContent = `$${totalPrice}`;

    CartsContainer



};



fetchCarts()
