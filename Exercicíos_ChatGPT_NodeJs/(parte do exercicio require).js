function soma(num1, num2){
    return num1 + num2
}
function subtração(num1, num2){
    return num1 - num2
}
function multiplicação(num1, num2){
    return num1 * num2
}
function divisão(num1, num2){
    if(num2 == 0){
        return console.log("impossivel divisor 0")
    }else{
        return num1 / num2
    }
}
module.exports = { soma, multiplicação, divisão, subtração };