console.log("A4.2_HW_2")

console.log("---- ---- ----")

console.log("1.1")
function checkEvenOdd(number) {
    if (number % 2 === 0) {
        console.log("The number is even")
    } else {
        console.log("The number is odd")
    }
}

console.log(checkEvenOdd(9))

console.log("---- ---- ----")

console.log("1.2")
function checkGrade(score, passingScore) {
    if (score >= passingScore) {
        console.log("Congratulations! You have passed")
    }
}
checkGrade(85, 60)

console.log("---- ---- ----")

console.log("1.3")
function calculateAllowance(age, isStudent, baseAllowance) {
    if (age < 18 && isStudent === true) {
        return baseAllowance + 100
    } else if (age > 18 && age < 25 && isStudent === true) {
        return baseAllowance + 50
    } else {
        baseAllowance
    }
}

console.log("The updated allowance is:", calculateAllowance(16,true,500))