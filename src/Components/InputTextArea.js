import React from "react";

const InputTextArea = ({ onChange, placeholder }) => {
    return (
        <textarea
            type="text"
            placeholder={placeholder}
            onChange={onChange}
            className="w-11/12 border-2 p-4 min-h-96 rounded-lg bg-primary border-secondary bg-opacity- decoration-0 outline-none"
        />
    );
};

export default InputTextArea;
