import React, { useRef, useState } from "react";
import InputOneDigit from "./InputOneDigit";

const InputOfNDigits = ({ n, onSubmit, placeholder, errorBase }) => {
    n = parseInt(n);
    const inputsRef = useRef([]);
    const [errorMessage, setErrorMessage] = useState("");

    const handleInputChange = (index, event) => {
        setErrorMessage("");
        const value = event.target.value;
        if (/\d{1}/.test(value)) {
            inputsRef.current[index].value = value;
            if (index < inputsRef.current.length - 1) {
                inputsRef.current[index + 1].focus();
            } else {
                inputsRef.current[index].blur();
                const combinedValue = inputsRef.current.reduce((acc, input) => acc + input.value, "");
                if (combinedValue.length === n) {
                    onSubmit(combinedValue);
                } else {
                    setErrorMessage(errorBase + " doit contenir " + n + " chiffres");
                }
            }
        } else {
            if (value.length > 0) {
                inputsRef.current[index].value = "";
                setErrorMessage(errorBase + " ne doit contenir que des chiffres");
            }
        }
    };

    const handleKeyDown = (index, event) => {
        if (event.key === "Backspace" && !inputsRef.current[index].value && index > 0) {
            inputsRef.current[index - 1].focus();
        }
    };

    return (
        <>
            <div className="flex flex-row justify-between w-full px-10 max-w-fit">
                {Array.from({ length: n }).map((_, index) => (
                    <InputOneDigit
                        index={index}
                        key={index}
                        placeholder={placeholder ? (placeholder[index] ? placeholder[index] : "") : ""}
                        refProp={(el) => (inputsRef.current[index] = el)}
                        onChange={(event) => handleInputChange(index, event)}
                        onKeyDown={(event) => handleKeyDown(index, event)}
                    />
                ))}
            </div>
            {errorMessage && <p className="error"> {errorMessage} </p>}
        </>
    );
};

export default InputOfNDigits;
