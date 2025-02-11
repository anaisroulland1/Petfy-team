import React from "react";

const InputOneDigit = ({ index, refProp, onChange, onKeyDown, placeholder }) => {
    return (
        <input
            key={index}
            type="text"
            maxLength={1}
            ref={refProp}
            onChange={onChange}
            onKeyDown={onKeyDown}
            placeholder={placeholder}
            className="mx-0.5 max-w-10 h-14 rounded-full bg-secondary p-1 flex flex-col border-b-2 border-primarytext text-center text-2xl"
        />
    );
};

export default InputOneDigit;
