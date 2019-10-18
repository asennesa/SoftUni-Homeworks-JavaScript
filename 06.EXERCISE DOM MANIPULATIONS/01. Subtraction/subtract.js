function subtract() {
    const first = document.getElementById("firstNumber");
    const second = document.getElementById("secondNumber")
    let result = first.value - second.value;
    const resultDiv = document.getElementById("result").innerHTML = result;



}