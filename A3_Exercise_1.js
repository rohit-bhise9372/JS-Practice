console.log("A3_Exercise_1")
//1
let rahulSalesTarget = 100
let priyaSalesTarget = 200
let amitSalesTarget = 150

let rahulActualSales = 85
let priyaActualSales = 180
let amitActualSales = 120

//2
let rahulSalesPercentage = (rahulActualSales / rahulSalesTarget) * 100
let priyaSalesPercentage = (priyaActualSales / priyaSalesTarget) * 100
let amitSalesPercentage = (amitActualSales / amitSalesTarget) * 100

//3
let performance1 = ""
if (rahulSalesPercentage >= 90) {
    performance1 = ("High Performer")
    rahulBonus = 0.20    
} else if (rahulSalesPercentage >= 70) {
    performance1 = ("Average Performer")
    rahulBonus = 0.10
} else if (rahulSalesPercentage < 70){
    performance1 = ("Low Performer")
    rahulBonus = 0
}

let performance2 = ""
if (priyaSalesPercentage >= 90) {
    performance2 = ("High Performer")
    priyaBonus = 0.20
} else if (priyaSalesPercentage >= 70) {
    performance2 = ("Averege Performer")
    priyaBonus = 0.10
} else if (priyaSalesPercentage < 70) {
    performance2 = ("Low Performer")
    priyaBonus = 0
}

let performance3 = ""
if (amitSalesPercentage >= 90) {
    performance3 = ("High Performer")
    amitBonus = 0.20
} else if (amitSalesPercentage >= 70) {
    performance3 = ("Average Performer")
    amitBonus = 0.10
} else if (amitSalesPercentage < 70) {
    performance3 = ("Low Performer")
    amitBonus = 0
}

//4
let rahulBonusAmount = rahulActualSales * rahulBonus
let priyaBonusAmount = priyaActualSales * priyaBonus
let amitBonusAmount = amitActualSales * amitBonus



console.log("----------------------------")
console.log("Sales Performance Report")
console.log("----------------------------")


console.log("Rahul")
console.log("Sales Target: ", rahulSalesTarget + " units")
console.log("Units Sold: ", rahulActualSales + " units")
console.log("Sales Percentage: ", rahulSalesPercentage + "%")
console.log("Performance: ",performance1 )
console.log("Bonus Amount: ", rahulBonusAmount + " units" + "\n")


console.log("Priya")
console.log("Sales Target: ", priyaSalesTarget + " units")
console.log("Units Sold: ", priyaActualSales + " units")
console.log("Sales Percentage: ", priyaSalesPercentage + "%")
console.log("Performance: ", performance2)
console.log("Bonus Amount: ", priyaBonusAmount + " units" + "\n")


console.log("Amit")
console.log("Sales Target: ", amitSalesTarget + " units")
console.log("Units Sold: ", amitActualSales + " units")
console.log("Sales Percentage: ", amitSalesPercentage + "%")
console.log("Performance: ", performance3)
console.log("Bonus Amount: ", amitBonusAmount + " units")
