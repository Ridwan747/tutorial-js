function function1(Rice, Beans, Salt, Oil) {
    var Total = Rice + Beans + Salt + Oil
    var function1 = `Rice = ${Rice}\nBeans = ${Beans}\nSalt = ${Salt}\nOil = ${Oil}\nTotal order:${Total}`
    
    return function1
    

}

function function2() {

    
    return function1(50, 200, 50, 20)
    
}
console.log(function2())
