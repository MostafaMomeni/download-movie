import React, { useId , useContext } from "react";
import "./Register.css";
import { AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { useForm } from "../../Hooks/useForm";
import Input from "../../Components/Form/Input";
import {
  requiredValidator,
  minValidator,
  maxValidator,
  emailValidator,
} from "../../Validators/Roules";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../Context/AuthContext";

export default function Register() {
  const [formStateRegister, onInputHandlerRegister] = useForm(
    {
      userName: {
        value: "",
        isValid: false,
      },
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );
  const [formStateLogin, onInputHandlerLogin] = useForm(
    {
      userName: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const userId = useId();
  const navigate = useNavigate()
  const authContext = useContext(AuthContext)

  const registerHandler = (e) => {
    e.preventDefault();
    const newUserInfo = {
      id: userId,
      userName: formStateRegister.inputs.userName.value,
      email: formStateRegister.inputs.email.value,
      password: formStateRegister.inputs.password.value,
    };
    
    authContext.login(newUserInfo , newUserInfo)
    
    Swal.fire({
        title:"شما با موفقیت در سایت ثبت نام کردید",
        icon:"success",
        confirmButtonText:"رفتن به صفحه اصلی"
    }).then(res =>{
        navigate("/")
    })
};

const loginHandler = (e)=>{
    e.preventDefault();
    const newUserInfo = {
        id: userId,
        userName: formStateLogin.inputs.userName.value,
        password: formStateLogin.inputs.password.value,
      };

    authContext.login(newUserInfo , newUserInfo)

      Swal.fire({
        title:"شما با موفقیت وارد اکانت خود شدید ",
        icon:"success",
        confirmButtonText:"رفتن به صفحه اصلی"
    }).then(res =>{
        navigate("/")
    })
}

  return (
    <>
      <div class="main-register my-5">
        <input
          className="input-register"
          type="checkbox"
          id="chk"
          aria-hidden="true"
        />

        <div class="signup">
          <form>
            <label for="chk" aria-hidden="true" className="label-register">
              ثبت نام
            </label>

            <div className="div-input-parent-register">
              <Input
                type="text"
                className="input-register"
                id="userName"
                element="input"
                validation={[
                  requiredValidator(),
                  minValidator(5),
                  maxValidator(15),
                ]}
                onInputHandler={onInputHandlerRegister}
                placeholder="نام کاربری خود را وارد کنید"
              />
              <AiOutlineUser className="icon-input-register" />
            </div>

            <div className="div-input-parent-register">
              <Input
                type="text"
                className="input-register"
                id="email"
                element="input"
                validation={[
                  requiredValidator(),
                  minValidator(8),
                  maxValidator(30),
                  emailValidator(),
                ]}
                onInputHandler={onInputHandlerRegister}
                placeholder="ایمیل خود را وارد کنید"
              />
              <AiOutlineMail className="icon-input-register" />
            </div>

            <div className="div-input-parent-register">
              <Input
                type="text"
                className="input-register"
                id="password"
                element="input"
                validation={[
                  requiredValidator(),
                  minValidator(8),
                  maxValidator(20),
                ]}
                onInputHandler={onInputHandlerRegister}
                placeholder="رمز عبور خود را وارد کنید"
              />

              <RiLockPasswordLine className="icon-input-register" />
            </div>

            <button
              onClick={(e) => registerHandler(e)}
              className={`button-register ${
                formStateRegister.isFormValid ? "" : "button-disabled"
              }`}
              disabled={!formStateRegister.isFormValid}
            >
              ثبت نام
            </button>
          </form>
        </div>

        <div class="login">
          <form>
            <label for="chk" aria-hidden="true" className="label-register">
              ورود
            </label>
            <div className="div-input-parent-register">
              <Input
                type="text"
                className="input-register"
                id="userName"
                element="input"
                validation={[
                  requiredValidator(),
                  minValidator(6),
                  maxValidator(30),
                ]}
                onInputHandler={onInputHandlerLogin}
                placeholder="نام کاربری خود را وارد کنید"
              />
              <AiOutlineUser className="icon-input-register" />
            </div>

            <div className="div-input-parent-register">
              <Input
                type="text"
                className="input-register"
                id="password"
                element="input"
                validation={[
                  requiredValidator(),
                  minValidator(8),
                  maxValidator(20),
                ]}
                onInputHandler={onInputHandlerLogin}
                placeholder="رمز عبور خود را وارد کنید"
              />
              <RiLockPasswordLine className="icon-input-register" />
            </div>
            <button
              className={`button-register ${
                formStateLogin.isFormValid ? "" : "button-disabled"
              }`}
              disabled={
                // !formStateLogin.isFormValid
                true
              }
              onClick={(e)=>loginHandler(e)}
            >
              ورود
            </button>
            <span className="error-alert-danger">این قسمت به دلیل عدم وجود بک اند غیر فعال است</span>
          </form>
        </div>
      </div>
    </>
  );
}
