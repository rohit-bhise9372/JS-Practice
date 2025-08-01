console.log("A3.3_HW_1");
console.log("---- ---- ----");

let employee1Name = "Rahul";
let employee1Grade = 90;
let employee1HoursWorked = 27;
let employee1Salary = 45000;
let employee1VacationLeaveTaken = 2;
let employee1SickLeaveTaken = 1;

let employee1Bonus = "";
if (employee1HoursWorked > 30 && employee1Grade > 75) {
  employee1Bonus = 0.2;
} else if (employee1HoursWorked > 25 && employee1Grade > 95) {
  employee1Bonus = 0.15;
} else if (employee1HoursWorked > 25 && employee1Grade > 85) {
  employee1Bonus = 0.1;
}
let employee1PFDeduction = "";
if (employee1Salary > 35000) {
  employee1PFDeduction = employee1Salary * 0.125;
} else {
  employee1PFDeduction = 2500;
}

let employee1TDSDeduction = ""
if (employee1Salary > 40000) {
  employee1TDSDeduction = employee1TDSDeduction * 0.10;
} else {
  employee1TDSDeduction = 199;
}

const dailySalary = employee1Salary / 30;
const employee1VacationDeduction = employee1VacationLeaveTaken * dailySalary;
const employee1SickDeduction = employee1SickLeaveTaken * dailySalary;

const employee1NetSalary = employee1Salary + employee1Salary * employee1Bonus;

console.log("Employee Name: ", employee1Name);
console.log("Grade:", employee1Grade);
console.log("Hours Worked: ", employee1HoursWorked);
console.log("Salary: ", employee1Salary);
console.log("Bonus: ", employee1Bonus);
console.log("PF Deduction: ", employee1PFDeduction);
console.log("TDS Deduction: ", employee1TDSDeduction);
console.log("Vacation Deduction: ", employee1VacationDeduction);
console.log("Sick Deduction: ", employee1SickDeduction);
console.log("Net Salary: ", employee1NetSalary);

console.log("-------------------------------")
