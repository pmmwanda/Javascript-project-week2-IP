const additionFunction = (inputOne, inputTwo) => {
    return inputOne + inputTwo
}
const subtractionFunction = (inputOne, inputTwo) => {
    return inputOne - inputTwo
}
const multiplicationFunction = (inputOne, inputTwo) => {
    return inputOne * inputTwo
}
const divisionFunction = (inputOne, inputTwo) => {
    return inputOne / inputTwo
}
const myCalculatorProgram =() => {
    //ask user for inputOne
    const numberOne = prompt('please state the first number')
    //ask user for inputTwo
    const numberTwo = prompt('please state the second number')
    //ask user for operation they want to be done
    const operation = prompt('please state the type of operation')
    //perform the operation basedd on the type specified above
    if (operation == '+') {
        additionFunction(numberOne, numberTwo)
    }

}