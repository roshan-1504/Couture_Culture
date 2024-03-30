// Card data
const cardData = [
    { name: "DIFFERENCE OF OPINION Printed T-Shirt", category: "T-Shirts",   image: "card1.png", price: "Rs.450" },
    { name: "THE CLOTHING FACTORY Unisex Pure Cotton T-Shirt", category: "T-Shirts",   image: "card2.png", price: "Rs.1865" },
    { name: "H & M Men's Pure Cotton Shirt", category: "Shirts",   image: "card3.png", price: "Rs.1800" },
    { name: "Taavi Kalamkari Handblock Print Kurti", category: "Kurtis",   image: "card4.png", price: "Rs.1650" },
    { name: "SASSAFRAS Women Straight Fit Jeans", category: "Jeans",   image: "card5.png", price: "Rs.1970" },
    { name: "Allen Solly Men Slim Fit Cotton Shirt", category: "Shirts", image: "card6.png", price: "Rs.2100" },
    { name: "H & M Printed Velvet Wrap Dress", category: "Dresses",   image: "card7.png", price: "Rs.2560" },
    { name: "Snitch Men Pure Cotton Cargo Jeans", category: "Jeans",   image: "card8.png", price: "Rs. 2500" },
    { name: "Globus Women's Crop Tailored Jacket", category: "Jackets", image: "card9.png", price: "Rs.1500" },
    { name: "Puma Deviate Nitro 2 Running Shoes", category: "Shoes", image: "card10.png", price: "Rs.4500" }
    // Add more card data as needed
];

// Function to create a single card element
function createCard(card) {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");

    const imageElement = document.createElement("img");
    imageElement.src = card.image;
    imageElement.alt = card.name;

    const containerElement = document.createElement("div");
    containerElement.classList.add("cardcontainerjs");

    const nameElement = document.createElement("h4");
    nameElement.innerHTML = "<b>" + card.name + "</b>";

    const priceElement = document.createElement("priceClass");
    priceElement.textContent = "Price: " + card.price;

    const categoryElement = document.createElement("p");
    categoryElement.textContent = "Category: " + card.category;

    containerElement.appendChild(nameElement);
    containerElement.appendChild(priceElement);
    containerElement.appendChild(categoryElement);

    cardElement.appendChild(imageElement);
    cardElement.appendChild(containerElement);

    return cardElement;
}

// Function to render all cards
function renderCards() {
    const cardContainer = document.getElementById("cardContainer");

    cardData.forEach(card => {
        const cardElement = createCard(card);
        cardContainer.appendChild(cardElement);
    });
}

// Render the cards when the DOM content is loaded
document.addEventListener("DOMContentLoaded", renderCards);
