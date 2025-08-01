console.log("A3_Exercise_2")

//1
let day1Burnt = 400
let day1Intake = 1500

let day2Burnt = 450
let day2Intake = 1800

let day3Burnt = 300
let day3Intake = 1600

let day4Burnt = 500
let day4Intake = 2000

let day5Burnt = 350
let day5Intake = 1700

//2
let baseCalorie = 1500

//3
let Report1 = ""
let Status1 = ""

let day1Surplus = day1Burnt - (day1Intake + baseCalorie)
if (day1Surplus < 0) {
    Report1 = day1Surplus
    Status1 = "Deficit"
} else {
    Report1 = day1Surplus
    Status1 = "Surplus"
}

let Report2 = ""
let Status2 = ""

let day2Surplus = day2Burnt - (day2Intake + baseCalorie)
if (day2Surplus < 0) {
    Report2 = day2Surplus
    Status2 = "Deficit"
} else {
    Report2 = day2Surplus
    Status2 = "Surplus"
}

let Report3 = ""
let Status3 = ""

let day3Surplus = day3Burnt - (day3Intake + baseCalorie)
if (day3Surplus < 0) {
    Report3 = day3Surplus
    Status3 = "Deficit"
} else {
    Report3 = day3Surplus
    Status3 = "Surplus"
}

let Report4 = ""
let Status4 = ""

let day4Surplus = day4Burnt - (day4Intake + baseCalorie)
if (day4Surplus < 0) {
    Report4 = day4Surplus
    Status4 = "Deficit"
} else {
    Report4 = day4Surplus
    Status4 = "Surplus"
}

let Report5 = ""
let Status5 = ""

let day5Surplus = day5Burnt - (day5Intake + baseCalorie)
if (day5Surplus < 0) {
    Report5 = day5Surplus
    Status5 = "Deficit"
} else {
    Report5 = day5Surplus
    Status5 = "Surplus"
}

//4
let totalBurnt = day1Burnt + day2Burnt + day3Burnt + day4Burnt + day5Burnt
let totalIntake = day1Intake + day2Intake + day3Intake + day4Intake + day5Intake
let totalSurplus = totalBurnt - (totalIntake + baseCalorie)

//5
let standingGoalAwards = ""
if (totalBurnt >= 1000) {
    standingGoalAwards = "Congratulations! You have kept moving throughout. Keep it up!"
} else {
    standingGoalAwards = "No Award yet"
}

//6
console.log("Daily Reports: ", "\n")
console.log("Day 1: Deficit: " + day1Surplus + " (" + Status1 + ")")
console.log("Day 2: Deficit: " + day2Surplus + " (" + Status2 + ")")
console.log("Day 3: Deficit: " + day3Surplus + " (" + Status3 + ")")
console.log("Day 4: Deficit: " + day4Surplus + " (" + Status4 + ")")
console.log("Day 5: Deficit: " + day5Surplus + " (" + Status5 + ")", "\n")

console.log("Weekly Summary: ")
console.log("Total Calories Burnt: " + totalBurnt)
console.log("Total Calories Intake: " + totalIntake)
console.log("Total Surplus/Deficit: " + totalSurplus, "\n")

console.log("Award: ")
console.log("Standing Goal Award: " + standingGoalAwards)
