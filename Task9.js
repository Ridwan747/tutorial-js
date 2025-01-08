function function1(NAME, NUMBERS, EMAIL, ADDRESS, PASSWORD, CONFIRMPASSWORD) {
    console.log("\t====== LOGIN FORM ======")
    var function1 = `\tNAME: ${NAME}\n \tNUMBERS: ${NUMBERS}\n \tEMAIL: ${EMAIL}\n \tADDRESS: ${ADDRESS}\n \tPASSWORD: ${PASSWORD}\n \tCONFIRMPASSWORD: ${CONFIRMPASSWORD}\n`
    return function1
}
function function2() {
    //console.log("=== Login ===")
    return (function1('Kunle', "08164089959", 'admin@gmail.con', '5 Bogobiri', '2478', '2478'))
  
    
}
console.log(function2(),"\n  \t ===== [LOGIN] =====")
console.log(function3())


function function3() {
   
    return("\n \t=== REGISTRATION FORM === ")
    
    
}


function function4(NAME, DATEOFBIRTH, GENDER, COUNTRY, STATE) {
    var function4 = `\tNAME: ${NAME}\n \tDATEOFBIRTH: ${DATEOFBIRTH}\n \tGENDER: ${GENDER}\n \tCOUNTRY: ${COUNTRY}\n \tSTATE: ${STATE}\n`
    return function4
    
}
console.log(function4('ridwan', '03-05-2003', 'male', 'nigeria', 'cross river'))
