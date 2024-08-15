import {useEffect, useReducer, useRef, useState} from "react";
import useInput from "../hooks/use-input";

const SomeInput = (props) => {
    const {
        value: enteredName,
        hasError: hasNameInputError,
        isValid: isEnteredNameValid,
        inputChangeHandler: nameInputChangeHandler,
        inputLostFocusHandler: nameInputLostFocusHandler,
        resetValues: resetNameInputValues,
    } = useInput(val => val.trim() !== "");

    const {
        value: enteredEmail,
        hasError: hasEmailInputError,
        isValid: isEnteredEmailValid,
        inputChangeHandler: emailInputChangeHandler,
        inputLostFocusHandler: emailInputLostFocusHandler,
        resetValues: resetEmailInputValues,
    } = useInput(val => val.includes('@'));

    // const [enteredName, setEnteredName] = useState('');
    // // const nameInputRef = useRef();
    // // const [isEnteredNameValid, setIsEnteredNameValid] = useState(true);
    // const [wasNameInputTouched, setWasNameInputTouched] = useState(false);
    // // const [isFormValid, setIsFormValid] = useState(false);

    // const [enteredEmail, setEnteredEmail] = useState('');
    // const [wasEmailInputTouched, setWasEmailInputTouched] = useState(false);

    // // const isNameInputInvalid = !isEnteredNameValid && wasNameInputTouched;
    // const isEnteredNameValid = enteredName.trim() !== '';
    // const isNameInputInvalid = !isEnteredNameValid && wasNameInputTouched;

    // const isEnteredEmailValid = enteredEmail.includes('@');
    // const isEmailInputInvalid = !isEnteredEmailValid && wasEmailInputTouched;

    let isFormValid = false;

    if (isEnteredNameValid && isEnteredEmailValid) {
        isFormValid = true;
    }

    const nameInputClasses = hasNameInputError ? "form-control invalid" : "form-control";
    const emailInputClasses = hasEmailInputError ? "form-control invalid" : "form-control";


    // useEffect(() => {
    //     if(!isNameInputInvalid){
    //         console.log("Данные валидны");
    //     }
    // }, [isEnteredNameValid]);


    // const emailInputChangeHandler = (e) => {
    //     setEnteredEmail(e.target.value);
    // };
    //
    // const emailInputLostFocusHandler = (e) => {
    //     setWasEmailInputTouched(true);
    // }

    const formSubmitHandler = (e) => {
        e.preventDefault();
        // setWasNameInputTouched(true);

        if (!isEnteredNameValid) {
            return;
        }
        // if(enteredName.trim() === ''){
        //     setIsEnteredNameValid(false);
        //     return;
        // }
        // setIsEnteredNameValid(true);

        console.log(enteredName);
        resetNameInputValues();
        resetEmailInputValues();

        // console.log(nameInputRef.current.value);
        // setEnteredName('');
        // setEnteredEmail('');
        // setWasNameInputTouched(false);
        // setWasEmailInputTouched(false);
        // nameInputRef.current.value = ''; // not best practice
    };



    return (
        <form onSubmit={formSubmitHandler}>
            <div className={nameInputClasses}>
                <label htmlFor="name">Введите Имя</label>
                <input
                    type="text"
                    id="name"
                    onChange={nameInputChangeHandler}
                    onBlur={nameInputLostFocusHandler}
                    // ref={nameInputRef}
                    value={enteredName}
                    placeholder="Enter Your Name"
                />
                {hasNameInputError && <div className="error-text">Введите Имя</div>}
            </div>
            <div className={emailInputClasses}>
                <label htmlFor="email">Введите Email</label>
                <input
                    type="email"
                    id="email"
                    placeholder="Enter Your Email Address"
                    onChange={emailInputChangeHandler}
                    onBlur={emailInputLostFocusHandler}
                    value={enteredEmail}
                />
                {hasEmailInputError && <div className="error-text">Введите Email</div>}
            </div>
            <div className="form-actions">
                <button type="submit" disabled={!isFormValid}>Отправить</button>
            </div>
        </form>
    );
};

export default SomeInput;
