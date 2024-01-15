import roules from "./Roules"
import testEmail from "./Regex";

const Validators = (value , validations) =>{

    let validationRoules = [];


    for(const validator of validations){
        if(validator.value === roules.requiredValue){
            if(typeof(value) == "number"){
                value.length === 0 && validationRoules.push(false);
            }else{
                value.trim().length === 0 && validationRoules.push(false);
            }
        }

        if(validator.value === roules.minValue){
            if(typeof(value) == "number"){
                value.length < validator.min && validationRoules.push(false);
            }else{
                value.trim().length < validator.min && validationRoules.push(false);
            }
        }

        if(validator.value === roules.maxValue){
            if(typeof(value) == "number"){
                value.length > validator.max && validationRoules.push(false);
            }
            else{
                value.trim().length > validator.max && validationRoules.push(false);
            }
        }

        if(validator.value === roules.emailValue){
            !testEmail(value) && validationRoules.push(false);
        }
    }

    if(validationRoules.length){
        return false
    }else{
        return true
    }
}


export default Validators