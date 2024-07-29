import {useEffect, useReducer, useRef, useState} from "react";

const SomeInput = (props) => {
    const [enteredName, setEnteredName] = useState('');
    // const nameInputRef = useRef();
    // const [isEnteredNameValid, setIsEnteredNameValid] = useState(true);
    const [wasNameInputTouched, setWasNameInputTouched] = useState(false);
    // const [isFormValid, setIsFormValid] = useState(false);

    // const isNameInputInvalid = !isEnteredNameValid && wasNameInputTouched;
    const isEnteredNameValid = enteredName.trim() !== '';
    const isNameInputInvalid = !isEnteredNameValid && wasNameInputTouched;
    let isFormValid = false;
    if(isEnteredNameValid){
        isFormValid = true;
    }

    const inputClasses = isNameInputInvalid ? "form-control invalid" : "form-control";


    // useEffect(() => {
    //     if(!isNameInputInvalid){
    //         console.log("Данные валидны");
    //     }
    // }, [isEnteredNameValid]);

    const nameInputChangeHandler = (e) => {
        setEnteredName(e.target.value);
    };

    const formSubmitHandler = (e) => {
        e.preventDefault();
        setWasNameInputTouched(true);

        if(!isEnteredNameValid){
            return;
        }
        // if(enteredName.trim() === ''){
        //     setIsEnteredNameValid(false);
        //     return;
        // }
        // setIsEnteredNameValid(true);

        console.log(enteredName);
        // console.log(nameInputRef.current.value);
        setEnteredName('');
        setWasNameInputTouched(false);
        // nameInputRef.current.value = ''; // not best practice
    };

    const nameInputLostFocusHandler = (e) => {
        setWasNameInputTouched(true);
    }


    return (
        <form onSubmit={formSubmitHandler}>
            <div className={inputClasses}>
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
                {isNameInputInvalid && <div className="error-text">Введите Имя</div>}
            </div>
            <div className={inputClasses}>
                <label htmlFor="email">Введите Email</label>
                <input
                    type="email"
                    id="email"
                    placeholder="Enter Your Email Address"
                />
                {isNameInputInvalid && <div className="error-text">Введите Email</div>}
            </div>
            <div className="form-actions">
                <button type="submit" disabled={!isFormValid}>Отправить</button>
            </div>
        </form>
    );
};

export default SomeInput;
