console.log("A2.3_HW_2")

console.log("---- ---- ----")
console.log("Exercise 1")
console.log("---- ---- ----")

console.log("1.1")
let runMatch1 = 78
let runMatch2 = 102
let runMatch3 = 45
let totalRuns = runMatch1 + runMatch2 + runMatch3
let battingAverage = totalRuns / 3
let excellentFielding = true

let selection = battingAverage > 60 && excellentFielding 

console.log("Is the cricketer selected? ", selection)

console.log("---- ---- ----")

console.log("1.2")
let gymMembership = true 
let purchaseAmount = 1500

let qualifiesForDiscountedPurchase = gymMembership || purchaseAmount > 1499
console.log("Does the user qualify to purchase the item at a discounted price? ", qualifiesForDiscountedPurchase)

console.log("---- ---- ----")

console.log("1.3")
let iciciBalance = 8000
let axisBalance = 6000
let laptopCost = 35000
let phoneCost = 25000
let headphoneCost = 3000
let totalCost = laptopCost + phoneCost + headphoneCost
let canWeAffordElectronics = totalCost <= iciciBalance || totalCost <= axisBalance

console.log("Can you afford the purchase? ", canWeAffordElectronics)

console.log("---- ---- ----")
console.log("Exercise 2")
console.log("---- ---- ----")

console.log("2.1")
let carSpeed = 65
let isSpeedInRange = carSpeed >= 40 && carSpeed <= 80

console.log("Is the car's speed between 40 and 80? ", isSpeedInRange)

console.log("---- ---- ----")
console.log("Exercise 3")
console.log("---- ---- ----")

console.log("3.1")
let phoneMemory = 64
let phonePrice = 25000
let phoneBrand = "OnePlus"

let meetsCriteria = phoneMemory >= 128 && phonePrice <= 35000 && (phoneBrand === "OnePlus" || phoneBrand === "Samsung")
console.log("Does the phone meet the criteria? ", meetsCriteria)

console.log("---- ---- ----")

console.log("3.2")
let remainingItems = 4
let shoeSize = "M"
let shoeBrand = "Nike"

let isDiscountApplicable = remainingItems < 5 && shoeSize === "M" && (shoeBrand === "Nike" || shoeBrand === "Adidas")
console.log("Is discount applicable? ", isDiscountApplicable)

