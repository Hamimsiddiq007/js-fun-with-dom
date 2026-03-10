const form = document.querySelector("form");
const result = document.querySelector(".result");
const weightGuide = document.querySelector(".weight-guide");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    if(height === '' || isNaN(height) || height <= 0){
        result.innerHTML = "please enter a valid height"
    }
    else if(weight === '' || isNaN(weight) || weight <= 0){
        result.innerHTML = "please enter a valid weight"
    }
    else{
        const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
        if(bmi <= 18.5){
            result.innerHTML = `Your BMI is ${bmi} and you are underweight.`
        }
        else if(bmi > 18.5 && bmi <= 24.9){
            result.innerHTML = `Your BMI is ${bmi} and you are normal.`
        }
        else if(bmi > 25 && bmi <= 29.9){
            result.innerHTML = `Your BMI is ${bmi} and you are overweight.`
        }else{
            result.innerHTML = `Your BMI is ${bmi} and you are obese.`
        }
    }
});