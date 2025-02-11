import React from "react";

const Checkbox = ({ label, value, onChange, className }) => {
    return (
        <label className="text-sm {className}">
            <input type="checkbox" checked={value} onChange={onChange} />
            {label}
        </label>
    );
};

export default Checkbox;
