document.addEventListener("DOMContentLoaded", function () {
    gsap.from(".home-content h1", {
        duration: 1,
        opacity: 0,
        y: 50,
        ease: "power2.out"
    });

    gsap.from(".home-content p", {
        duration: 1.2,
        opacity: 0,
        y: 50,
        ease: "power2.out",
        delay: 0.3
    });

    gsap.from(".home-image img", {
        duration: 1.5,
        opacity: 0,
        x: 100,
        ease: "power2.out",
        delay: 0.5
    });
    
});
const products = [
    { name: "choclate cup cake", price: 100, image: "image/chocola-removebg-preview.png" },
    { name: " fresie", price: 450, image: "image/JJ-removebg-preview.png" },
    { name: " brownie", price: 450, image: "image/bro-removebg-preview.png" },
    { name: " sain-sebastien chess cake", price: 450, image: "  image/ii-removebg-preview.png"  },
    { name: " oreo Chess cake", price: 300, image: "Image/bb-removebg-preview.png" },
    { name: "classic cookies", price: 150, image: "Image/pis-removebg-preview.png" },
    { name: "  Vanilla Cupcake", price: 150, image: "image/vanilla-removebg-preview.png" }, 
    { name: "Tiramissu", price: 350, image: "image/HH-removebg-preview.png" },
    { name: " pistachio cookies", price: 200, image: "image/oista-removebg-preview.png" },
    { name: " Red Velvet Cookies", price: 150, image: "image/val-removebg-preview.png" },
    { name: " lotus chess cake", price: 400, image: "image/lotus-removebg-preview.png" },

];

let currentBox = [];

// 🔹 
function getRandomItemsByBudget(budget) {
    let selectedItems = [];
    let totalPrice = 0;
    let shuffledProducts = [...products].sort(() => 0.5 - Math.random());

    for (let item of shuffledProducts) {
        if (totalPrice + item.price <= budget) {
            selectedItems.push(item);
            totalPrice += item.price;
        }
    }

    return { items: selectedItems, total: totalPrice };
}

function buyMysteryBox() {
    let budgetInput = document.getElementById("budget");
    let budget = parseFloat(budgetInput.value);

    if (isNaN(budget) || budget < 500) {
        alert("     Please enter an amount not less than 500 DA");
        return;
    }

    let { items, total } = getRandomItemsByBudget(budget);
    currentBox = items;

    let resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `<h2>YOU got those products for a total of${total} DA </h2>`;

    let boxDiv = document.createElement("div");
    boxDiv.classList.add("box");

    items.forEach(item => {
        let itemHTML = `
            <div class="product-item">
                <p>${item.name} - ${item.price} DA</p>
                <img src="${item.image}" alt="${item.name}">
            </div>
        `;
        boxDiv.innerHTML += itemHTML;
    });

    resultDiv.appendChild(boxDiv);

    document.getElementById("retryBtn").style.display = "inline-block";
    document.getElementById("addToCartBtn").style.display = "inline-block";
}

     
function addToCart() {
    if (currentBox.length === 0) {
        alert("please select the box first  ");
        return;
    }

    let cartList = document.getElementById("cartItems");
    let totalPriceElement = document.getElementById("totalPrice");
    let totalCartPrice = 0;

    cartList.innerHTML = "";

    currentBox.forEach(item => {
        let listItem = document.createElement("li");
        listItem.textContent = `${item.name} - ${item.price} da`;
        cartList.appendChild(listItem);
        totalCartPrice += item.price;
    });

    totalPriceElement.textContent = `total: ${totalCartPrice} da`;
    alert("added to the box");
}


        
   

