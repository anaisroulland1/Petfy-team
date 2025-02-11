import React from "react";

const InputText = ({ onChange, placeholder }) => {
    return (
        <input
            type="text"
            placeholder={placeholder}
            onChange={onChange}
            className="border-b-2 border-secondary bg-opacity-0 bg-bgend decoration-0 outline-none"
        />
    );
};

export default InputText;
