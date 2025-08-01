console.log("A2_Assignment")

let movie1TicketsSold = 150
let movie2TicketsSold = 120
let movie3TicketsSold = 80

let movie1TicketPrice = 250
let movie2TicketPrice = 180
let movie3TicketPrice = 150

let movie1Revenue = movie1TicketPrice * movie1TicketsSold
let movie2Revenue = movie2TicketPrice * movie2TicketsSold
let movie3Revenue = movie3TicketPrice * movie3TicketsSold

let isMovie1Superhit = movie1Revenue > 5000
let isMovie2Superhit = movie2Revenue > 5000
let isMovie3Superhit = movie3Revenue > 5000

let totalRevenue = movie1Revenue + movie2Revenue + movie3Revenue

let rupeeSign = '\u20B9'


console.log("Indian Movie Ticket Sales Report")
console.log("-------------------------------")

console.log("Movie 1: Dilwale Dulhania Le Jayenge")
console.log("- Tickets Sold: ", movie1TicketsSold)
console.log("- Ticket Price: ", rupeeSign, movie1TicketPrice)
console.log("- Revenue: ", rupeeSign, movie1Revenue)
console.log("Superhit: ", isMovie1Superhit, "\n")

console.log("Movie 2: Kabhi Khusi Kabhe Gham")
console.log("- Tickets Sold: ", movie2TicketsSold)
console.log("- Ticket Price: ", rupeeSign , movie2TicketPrice)
console.log("- Revenue: ", rupeeSign,  movie2Revenue)
console.log("Superhit: ", isMovie2Superhit, "\n")

console.log("Movie 3: 3 Idiots")
console.log("- Tickets Sold: ", movie3TicketsSold)
console.log("- Ticket Price: ", rupeeSign, movie2TicketPrice)
console.log("- Revenue: ", rupeeSign, movie3Revenue)
console.log("Superhit: ", isMovie3Superhit, "\n")

console.log("Total Revenue: ", rupeeSign, totalRevenue)