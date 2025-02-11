import React from "react";

const Button = ({ children, onClick, className, type }) => {
    let buttonType = type === "secondary" ? "bg-secondary text-primarytext" : "bg-primary text-secondarytext";

    return (
        <button onClick={onClick} className={buttonType + " px-8 py-3 rounded-xl font-semibold w-3/5 " + (className || "")}>
            {children}
        </button>
    );
};

export default Button;
