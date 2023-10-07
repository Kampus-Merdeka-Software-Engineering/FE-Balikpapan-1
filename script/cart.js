const API_URL = "https://balikpapan-1-api.up.railway.app";


//get
const fetchCarts = async () => {
    const CartsContainer = document.getElementById("coba")

    const Cart = await fetch(`${API_URL}/shop`)
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

fetchCarts()
