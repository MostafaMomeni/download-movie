import React,{ useEffect, useReducer, useState} from 'react'
import "./Input.css"
import  Validators  from '../../Validators/Validators'



export default function Input(props) {
    const inputReducer = (state,action)=>{
        if(action.value !== ""){
            const borderColor = Validators(action.value , action.validation)
            if(borderColor){
                setBorderColor("valid")
            }
            else{
                setBorderColor("noValid")
            }   
        }else{
            setBorderColor("default")
        }
        switch(action.type){
            case "CHANGE":{
                return{
                    ...state,
                    value: action.value,
                    isValid : Validators(action.value , action.validation),
                }
            }
            default:{
                return state
            }
        }
        
    }

    const [borderColor,setBorderColor] =useState("default")

    
    const [mainInput , dispatch] = useReducer(inputReducer , {
        value:"",
        isValid : false
    })
    
    const {value , isValid} = mainInput
    const {id , onInputHandler} = props

    useEffect(()=>{
        onInputHandler(id , value , isValid)
    },[value])

    const onChangeHandler = (event) =>{
        dispatch({
            type:"CHANGE",
            value:event.target.value,
            validation : props.validation,
        })
    }

    useEffect(()=>{
        if(props.value !== undefined){

            dispatch({
                type :"CHANGE" ,
                value:props.value,
                validation  : props.validation
            })
        }
    },[props.value])

   let element = props.element === "input"?(
        <input 
        type={props.type}
        placeholder={props.placeholder}
        className={`${props.className} ${borderColor}`}
        value={mainInput.value}
        onChange={(event)=> onChangeHandler(event)}
        />
   ):(
        <textarea
        className={`${props.className} ${borderColor}`}
        placeholder={props.placeholder}
        value={mainInput.value}
        onChange={(event)=> onChangeHandler(event)}
        ></textarea>
   )
  return (
    <div>
        {element}
    </div>
  )
}
