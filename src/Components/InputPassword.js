import React from "react";

const InputPassword = ({ onChange, placeholder }) => {
    return (
        <input
            type="password"
            placeholder={placeholder}
            onChange={onChange}
            className="border-b-2 border-secondary bg-opacity-0 bg-bgend decoration-0 outline-none"
        />
    );
};

export default InputPassword;
