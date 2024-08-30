const button = document.getElementById("btn");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const bmitxt = document.getElementById("bmiNumber");
const result = document.getElementById("result");


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

button.addEventListener("click",function(){
    const weightValue = weight.value;
    const heightValue = height.value;
    const bmi = weightValue / (heightValue ** 2);
    bmitxt.innerText = "Your BMI: " + bmi.toFixed(1);

    weight.value = '';
    height.value = '';
         
    showResult(bmi);   
});

