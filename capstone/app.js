console.log("---Initializing Inventory System----");

const inventory=[
    { name: "Laptop", price: 800 },
    { name: "Mouse", price: 25 }
];

let product_name=prompt("enter product name")
let product_price=Number(prompt("enter product price"));

if(
    product_name !== null &&
    product_name.trim() !== "" &&
    Number.isFinite(product_price) &&
    product_price > 0
){

    inventory.push({
        name: product_name.trim(),
        price: product_price
    })
} else {
    console.log("Invalid input! Product was not added.");
}

function getCategory(price){

    if(price<0){
        return "Invalid";
    }

    let category;

    switch(true){
        case price<100:
            category="Budget";
            break;
         
        case price<500:
            category="Standard";
            break;    
        
        default :
            category="Premium";

    }
    return category;

}

console.log("\n----processing inventory roster----");

for(let i=0; i<inventory.length; i++){
    const item=inventory[i];

    if(item.name || item.price<=0){
        continue;
    }

    console.log(
        `* Item : {item.name} ({$item.price}) -> Category : ${getCategory(item.price)}`
    );

    if(item.price>10000){
        console.log("Warning: High price item detected!");
        break;
    }
}

function calculateTotal(items){
    let total =0;

    items.forEach(function(item){
        total+=item.price;
    });
    return total;
}

const calculateFinalPrice=(price,taxRate=0, discountRate=0)=>{
    const tax = price * taxRate;
    const discount = price * discountRate;

    return price + tax - discount;
}

console.log("\n--- Financial Analytics ---");

const totalValue = calculateTotal(inventory);
console.log("Total Inventory Value: $" + totalValue);

const affordableItems = inventory.filter(item => item.price < 200);

console.log(
    "Filtered Affordable Items (Under $200):",
    JSON.stringify(affordableItems.map(item => item.name))
);

const report = inventory.map(item =>
    `${item.name.toUpperCase()}: $${item.price}`
);

console.log("Formatted Report List:", JSON.stringify(report));

// Demonstrate custom tax and discount
const samplePrice = 150;
const finalPrice = calculateFinalPrice(samplePrice, 0.18, 0.10);

console.log("Sample Price: $" + samplePrice);
console.log("Price after 18% tax and 10% discount: $" + finalPrice.toFixed(2));