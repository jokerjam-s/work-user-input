import useInput from "../hooks/use-input";

const SomeForm = (props) => {
    const {
        value: enteredName,
        hasError: hasNameInputError,
        isValid: isEnteredNameValid,
        inputChangeHandler: nameInputChangeHandler,
        inputLostFocusHandler: nameInputLostFocusHandler,
        resetValues: resetNameInputValues,
    } = useInput((val) => val.trim() !== "");

    const {
        value: enteredEmail,
        hasError: hasEmailInputError,
        isValid: isEnteredEmailValid,
        inputChangeHandler: emailInputChangeHandler,
        inputLostFocusHandler: emailInputLostFocusHandler,
        resetValues: resetEmailInputValues,
    } = useInput((val) => val.includes('@'));

    const {
        value: enteredsName,
        hasError: hasSurnameInputError,
        isValid: isEnteredSurnameValid,
        inputChangeHandler: surnameInputChangeHandler,
        inputLostFocusHandler: surnameInputLostFocusHandler,
        resetValues: resetSurnameInputValues,
    } = useInput((val) => val.trim() !== "");

    let isformValid = isEnteredNameValid && isEnteredSurnameValid && isEnteredEmailValid;
    console.log(isformValid);

    const nameInputClasses = hasNameInputError ? "form-control invalid" : "form-control";
    const emailInputClasses = hasEmailInputError ? "form-control invalid" : "form-control";
    const surnameInputClasses = hasSurnameInputError ? "form-control invalid" : "form-control";

    const submitFormHandler = (e) => {
        e.preventDefault();

        if(!isformValid){
            return;
        }

        resetNameInputValues();
        resetSurnameInputValues();
        resetEmailInputValues();
    }

    return (
        <form onSubmit={submitFormHandler}>
            <div className="control-group">
                <div className="form-control" className={nameInputClasses}>
                    <label htmlFor="name">Введите Имя</label>
                    <input type="text" id="name" onChange={nameInputChangeHandler} onBlur={nameInputLostFocusHandler}/>
                    {hasNameInputError && <div className="error-text">Введите Имя</div>}
                </div>
                <div className="form-control" className={surnameInputClasses}>
                    <label htmlFor="surname">Введите Фамилию</label>
                    <input type="text" id="surname" onChange={surnameInputChangeHandler} onBlur={surnameInputLostFocusHandler}/>
                    {hasSurnameInputError && <div className="error-text">Введите фамилию</div>}
                </div>
            </div>
            <div className="form-control" className={emailInputClasses}>
                <label htmlFor="email">Введите E-Mail</label>
                <input type="email" id="email" onChange={emailInputChangeHandler} onBlur={emailInputLostFocusHandler}/>
                {hasEmailInputError && <div className="error-text">Введите email</div>}
            </div>
            <div className="form-actions">
                <button disabled={!isformValid}>Отправить</button>
            </div>
        </form>
    );
};

export default SomeForm;
