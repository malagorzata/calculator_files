document.querySelector("#calculate").addEventListener("click", calculateIt);   


function calculateIt() {
    let firstNumber =  parseFloat(document.querySelector("#firstnumber").value);
    let secondNumber = parseFloat(document.querySelector("#secondnumber").value);
    const operator = document.querySelector("#operator").value;
    let result = document.querySelector("#results").value;



    if (operator === "add") {
       result = firstNumber + secondNumber; 
    } else if (operator === "sub") {
        result = firstNumber - secondNumber;
    } else if (operator === "mul") {
        result = firstNumber * secondNumber;
    } else if (operator === "div") {
        result = firstNumber / secondNumber;
    }


document.querySelector("#results").innerHTML += `<li>${result}</li>`;
document.querySelector('#firstnumber').value = result;
result.scrollTop = result.scrollHeight;


}


document.querySelector("#clear").addEventListener("click", () => {
    document.getElementById("results").innerHTML='';
});