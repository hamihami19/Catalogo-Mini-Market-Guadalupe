// product management script

// Array to hold product information
let products = [];

// Add a product
function addProduct(name, price, quantity) {
    const product = { name, price, quantity };
    products.push(product);
    console.log(`Product added: ${JSON.stringify(product)}`);
}

// Remove a product by name
function removeProduct(name) {
    products = products.filter(product => product.name !== name);
    console.log(`Product removed: ${name}`);
}

// Update a product
function updateProduct(name, field, value) {
    const product = products.find(product => product.name === name);
    if (product) {
        product[field] = value;
        console.log(`Product updated: ${JSON.stringify(product)}`);
    } else {
        console.log(`Product not found: ${name}`);
    }
}

// List all products
function listProducts() {
    console.log(`Current Products: ${JSON.stringify(products)}`);
}

// Example usage
addProduct('Apple', 1.0, 100);
addProduct('Banana', 0.5, 200);
updateProduct('Apple', 'price', 1.2);
removeProduct('Banana');
listProducts();
