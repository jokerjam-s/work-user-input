import {useReducer} from "react";


const useInput = (validateValueFunc) => {
    const initialInputState = {
        inputValue: "",
        wasTouched: false,
    };

    const inputStateReducer = (state, action) => {
        if (action.type === "INPUT_CHANGE") {
            return {inputValue: action.value, wasTouched: state.wasTouched};
        }

        if (action.type === "INPUT_BLUR") {
            return {inputValue: action.value, wasTouched: true};
        }

        if (action.type === "RESET_INPUT") {
            return {inputValue: "", wasTouched: false};
        }
        return initialInputState;
    }

    const [inputState, dispatchAction] = useReducer(inputStateReducer, initialInputState);

    // const [enteredValue, setEnteredValue] = useState('');
    // const [wasInputTouched, setWasInputTouched] = useState(false);

    const isValueValid = validateValueFunc(inputState.inputValue);
    const isInputInvalid = !isValueValid && inputState.wasTouched;

    const inputChangeHandler = (e) => {
        dispatchAction({type: "INPUT_CHANGE", value: e.target.value});
    };

    const inputLostFocusHandler = (e) => {
        dispatchAction({type: "INPUT_BLUR"});
    }

    const resetValues = () => {
        dispatchAction({type: "RESET_INPUT"});

    }

    return {
        value: inputState.inputValue,
        hasError: isInputInvalid,
        isValid: isValueValid,
        inputChangeHandler,
        inputLostFocusHandler,
        resetValues,
    };
};

export default useInput;