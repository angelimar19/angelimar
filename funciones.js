/*function suma(n1,n2){
return n1+n2
}


console.log(suma( 5, 2))*/

let suma = (n1, n2) => n1 + n2

/*function resta(n1,n2){
    return n1-n2
}

console.log(resta(2,3))*/
let resta = (n1, n2) => n1 - n2

/*function multiplicacion(n1,n2){
    return n1*n2
}
console.log(multiplicacion(2,6))*/
let multiplicacion = (n1, n2) => n1 * n2

/*function division(n1, n2){
    return n1/n2
}
console.log(division(4,6))*/
let division = (n1, n2) => n1 / n2

/*function doble(n1){
    return n1*2
}
console.log(doble(2))*/
let doble = (n1) => n1 * 2

/*function mayor(n1,n2){
    if(n1>n2){
        return n1
    }else{
        return n2
    }
}
 
console.log(mayor(3,5))*/
let mayor = (n1, n2) => n1>n2 ? n1 : n2

/*function puedePasar(edad1, acom2) {
    if (edad1 > 18) {
        return true
    } if (edad1 >= 15 && acom2 == true) {
        return true

    } if (edad1 < 15) {
        return false
    }

}


console.log(puedePasar(13))*/

let puedePasar= (edad, vieneAcompañado) => (edad >= 18) || ((edad>=15)&&(vieneAcompañado))
console.log(puedePasar(14,true))