let cart = [];

// Men
function renderMenProducts(data = MenData) {
    const container = document.getElementById("men-container");
    if (!container) return;

    container.className = `
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        md:grid-cols-3 
        lg:grid-cols-4 
        gap-6 
        p-6
    `;

    container.innerHTML = data.map(item => `
        <div class="bg-white rounded-2xl shadow-md hover:shadow-2xl transition duration-300 overflow-hidden group">

            <div class="overflow-hidden">
                <img src="${item.image}" 
                     class="w-full h-64 object-cover group-hover:scale-110 transition duration-300">
            </div>

            <div class="p-4 flex flex-col gap-2">

                <div class="flex justify-between items-center">
                    <h2 class="text-lg font-bold text-gray-800">$${item.price}</h2>
                    <span class="text-xs bg-black text-white px-2 py-1 rounded-full">New</span>
                </div>

                <p class="text-gray-500 text-sm line-clamp-2">
                    ${item.description}
                </p>

                <div class="flex gap-3 mt-3">

                    <!-- FIX: add type -->
                    <button onclick="addToCart(${item.id}, 'men')"
                        class="flex-1 bg-gradient-to from-green-500 to-emerald-600 
                        hover:from-green-600 hover:to-emerald-700 
                        text-white py-2 rounded-xl font-semibold">
                        🛒 Cart
                    </button>

                    <button onclick="buyNow(${item.id}, 'men')"
                        class="flex-1 bg-blue-500 hover:bg-blue-600 
                        text-white py-2 rounded-xl font-semibold">
                        ⚡ Buy
                    </button>

                </div>
            </div>
        </div>
    `).join("");
}

/// Women

function renderWomenProducts(data = WomenData) {
    const container = document.getElementById("women-container");
    if (!container) return;

    container.className = `
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        md:grid-cols-3 
        lg:grid-cols-4 
        gap-6 
        p-6
    `;

    container.innerHTML = data.map(item => `
        <div class="bg-white rounded-2xl shadow-md hover:shadow-2xl transition duration-300 overflow-hidden group">

            <div class="overflow-hidden">
                <img src="${item.image}" 
                     class="w-full h-64 object-cover group-hover:scale-110 transition duration-300">
            </div>

            <div class="p-4 flex flex-col gap-2">

                <div class="flex justify-between items-center">
                    <h2 class="text-lg font-bold text-gray-800">$${item.price}</h2>
                    <span class="text-xs bg-black text-white px-2 py-1 rounded-full">New</span>
                </div>

                <p class="text-gray-500 text-sm line-clamp-2">
                    ${item.description}
                </p>

                <div class="flex gap-3 mt-3">

                    <!-- FIX: add type -->
                    <button onclick="addToCart(${item.id}, 'women')"
                        class="flex-1 bg-gradient-to from-green-500 to-emerald-600 
                        hover:from-green-600 hover:to-emerald-700 
                        text-white py-2 rounded-xl font-semibold">
                        🛒 Cart
                    </button>

                    <button onclick="buyNow(${item.id}, 'women')"
                        class="flex-1 bg-blue-500 hover:bg-blue-600 
                        text-white py-2 rounded-xl font-semibold">
                        ⚡ Buy
                    </button>

                </div>
            </div>
        </div>
    `).join("");
}

////
function renderCoupleProducts(data = CoupleData) {
    const container = document.getElementById("Couple-container");
    if (!container) return;

    container.className = `
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        md:grid-cols-3 
        lg:grid-cols-4 
        gap-6 
        p-6
    `;

    container.innerHTML = data.map(item => `
        <div class="bg-white rounded-2xl shadow-md hover:shadow-2xl transition duration-300 overflow-hidden group">

            <div class="overflow-hidden">
                <img src="${item.image}" 
                     class="w-full h-64 object-cover group-hover:scale-110 transition duration-300">
            </div>

            <div class="p-4 flex flex-col gap-2">

                <div class="flex justify-between items-center">
                    <h2 class="text-lg font-bold text-gray-800">$${item.price}</h2>
                    <span class="text-xs bg-black text-white px-2 py-1 rounded-full">New</span>
                </div>

                <p class="text-gray-500 text-sm line-clamp-2">
                    ${item.description}
                </p>

                <div class="flex gap-3 mt-3">

                    <!-- FIX: add type -->
                    <button onclick="addToCart(${item.id}, 'couple')"
                        class="flex-1 bg-gradient-to from-green-500 to-emerald-600 
                        hover:from-green-600 hover:to-emerald-700 
                        text-white py-2 rounded-xl font-semibold">
                        🛒 Cart
                    </button>

                    <button onclick="buyNow(${item.id}, 'couple')"
                        class="flex-1 bg-blue-500 hover:bg-blue-600 
                        text-white py-2 rounded-xl font-semibold">
                        ⚡ Buy
                    </button>

                </div>
            </div>
        </div>
    `).join("");
}


// Couple
// function renderCoupleProducts(data = CoupleData) {
//     const container = document.getElementById("Couple-container");
//     if (!container) return;

//     container.className = `
//         grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6
//     `;

//     container.innerHTML = data.map(item => `
//         <div class="bg-white rounded-2xl shadow-md hover:shadow-2xl transition duration-300 overflow-hidden group">

//             <img src="${item.image}" class="w-full h-64 object-cover">

//             <div class="p-4">
//                 <h2>$${item.price}</h2>

//                 <button onclick="addToCart(${item.id}, 'couple')" class="bg-green-500 text-white px-3 py-1 rounded mt-2">
//                     Cart
//                 </button>
//             </div>

//         </div>
//     `).join("");
// }


// ✅ FIXED CART
function addToCart(id, type) {
    let product;

    if (type === "men") product = MenData.find(p => p.id === id);
    if (type === "women") product = WomenData.find(p => p.id === id);
    if (type === "couple") product = CoupleData.find(p => p.id === id);

    if (product) {
        cart.push(product);
        console.log("Cart:", cart);
    }
}


// ✅ FIXED BUY
function buyNow(id, type) {
    let product;

    if (type === "men") product = MenData.find(p => p.id === id);
    if (type === "women") product = WomenData.find(p => p.id === id);
    if (type === "couple") product = CoupleData.find(p => p.id === id);

    if (product) {
        alert(`Buying: ${product.description} - $${product.price}`);
    }
}


// SEARCH (your logic OK, just safe)
function handleSearch(value) {
    value = value.toLowerCase();

    if (value === "") {
        renderMenProducts(MenData);
        return;
    }

    let filtered = MenData.filter(item =>
        item.description.toLowerCase().includes(value) ||
        String(item.price).includes(value)
    );

    renderMenProducts(filtered);
}


// GLOBAL
window.renderMenProducts = renderMenProducts;
window.renderWomenProducts = renderWomenProducts;
window.renderCoupleProducts = renderCoupleProducts;
window.addToCart = addToCart;
window.buyNow = buyNow;
window.handleSearch = handleSearch;