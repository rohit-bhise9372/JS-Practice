console.log("A2_Exercise_1")

let book1Quantity = 25
let book2Quantity = 15
let book3Quantity = 20

let rupeeSign = '\u20B9'

let book1Price = 350
let book2Price = 250
let book3Price = 200

let book1Value = book1Price * book1Quantity
let book2Value = book2Price * book2Quantity
let book3Value = book3Price * book3Quantity

let totalInventoryValue = book1Value + book2Value + book3Value

console.log("---- ---- ----")
console.log("Indian Bookstore Inventory Report")
console.log("------------------------------------")

console.log("Book 1: Mahabharata")
console.log("- Quantity: ", book1Quantity)
console.log("- Price: ", rupeeSign + book1Price)
console.log("- Value: ", rupeeSign + book1Value + "\n" + "\n")


console.log("Book 2: Ramayana")
console.log("- Quantity: ", book2Quantity)
console.log("- Price: ", rupeeSign + book2Price)
console.log("- Value: ", rupeeSign + book2Value + "\n" + "\n")


console.log("Book 3: Gitanjali")
console.log("- Quantity: ", book3Quantity)
console.log("- Price: ", rupeeSign + book3Price)
console.log("- Value: ", rupeeSign + book3Value + "\n" + "\n")

console.log("Total Inventory Value: ", rupeeSign + totalInventoryValue)