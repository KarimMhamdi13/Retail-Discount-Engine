// Coding Challenge 04b

const products = [
    { sku: "123", name: "Toothbrush", category: "Hygiene", price: 3.99, inventory: 125 },
    { sku: "234", name: "T-shirt", category: "Apparel", price: 7.99, inventory: 45 },
    { sku: "345", name: "Laptop", category: "Electronics", price: 599.99, inventory: 200 },
    { sku: "456", name: "Sponge", category: "Household", price: 3.50, inventory: 75 },
    { sku: "567", name: "Milk", category: "Groceries", price: 5.99, inventory: 60 },
];

for (let product of products) {
    let discount = 0;
    switch (product.category) {
        case "Electronics":
            discount = 0.2
            break;
        case "Groceries":
        case "Household":
            discount = 0.1
            break;
        
}
