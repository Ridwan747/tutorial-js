function billing(name, state, country, oderid, amount, greet) {

     var allBills = `${name} ${state} ${country} ${oderid} ${amount} ${greet}`

     console.log(allBills)

     return allBills
}

billing("John Joseph Edet",
       "Cross River",
       "Nigeria",
       "2453678D",
       "5,000",
       "Thank For Patronage")
