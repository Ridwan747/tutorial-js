function function1 (Toli, Tunde, Folake, Ubong) {
    console.log("\t====== Numbers Of Hours Work ======")
    var function1 = `\tToli works ${Toli}\n\tTunde works ${Tunde}\n\tFolake works ${Folake}\n\tUbong works ${Ubong}\n`
    return function1

}

function function2() {
    
    return function1('5 hours for $200', '8 hours for $200', '15 hours for $200', '10 hours for $200')
   
}
console.log(function2())
console.log (function3(200 * 5, 200 * 8, 200 * 15, 200 * 10))

function function3(Toli, Tunde, Folake, Ubong) {
    console.log("\t====== Total Amount To Be Paid ======")
    var Total = Toli * Tunde * Folake * Ubong
    var function1 = `\tToli will be pid $${Toli} for 5 hours\n\tTunde = ${Tunde}\n\tFolake = ${Folake}\n\tUbong = ${Ubong}\n\tTotal Amount paid :${Total}`
    return function1
}
