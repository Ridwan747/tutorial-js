
    function order(Burger, Marcaroni, Rice, Beans) {
        var Total = Burger + Marcaroni + Rice + Beans
        var order = `Burger = ${Burger}\nMacaroni = ${Marcaroni}\nRice = ${Rice}\nBeans = ${Beans}\nTotal order:,${Total}`
        console.log(order)
        return order
    //console.log(`Burger = ${Burger}\nMacaroni = ${Marcaroni}\nRice = ${Rice}\nBeans = ${Beans}\nTotal order:,${Total}`)
    
    }
    order(50, 70, 80, 80)