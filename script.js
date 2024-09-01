const button = document.getElementById("btn");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const bmitxt = document.getElementById("bmiNumber");
const result = document.getElementById("result");
const unitSelected = document.getElementById("unitSelected");
const btnClear = document.getElementById("btnClear");
const weightSelected = document.getElementById("weightSelected");

//for condition
function showResult(bmi){
    if(bmi < 18.5){
        result.innerText = "You are underweight!";
         
    }else if(bmi >= 18.5 && bmi <= 24.9){
        result.innerText = "You are normal."
    }else if(bmi >= 25 && bmi <= 29.9) {
        result.innerText = "You are overweight!";
    }else {
        result.innerText = "You are Obese!";
    }
}

 //clickEvent
button.addEventListener("click",function(){
    const weightValue = parseFloat(weight.value);
    const heightValue = parseFloat(height.value);
    const selectedUnit = unitSelected.value;
    const weightUnit = weightSelected.value;
        
    if(isNaN(heightValue) || isNaN(weightValue)){
        document.getElementById("error").innerText = "Enter a Valid number!";
        return;
    }

    let lbtoKg = weightValue;
    if(weightUnit === "lb") {
        lbtoKg = weightValue / 2.204;
    }

    let bmi;
    if(selectedUnit === "meter"){
        bmi = lbtoKg / (heightValue ** 2);
    } else if(selectedUnit === "centimeter") {
        bmi = lbtoKg / ((heightValue / 100) ** 2);
    }else {
        return;
    }
    bmitxt.innerText = "Your BMI: " + bmi.toFixed(1);

    const imgage = document.getElementById("img");
    imgage.classList.remove("hidden");
     
    showResult(bmi);
});

//for clear 
btnClear.addEventListener("click",function(){
    weight.value = '';
    height.value = '';
    result.innerText = '';
    bmitxt.innerText = '';
    document.getElementById("error").innerText = '';
})
