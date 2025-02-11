import React, { useState } from "react";
import Option from "./Option";

const MultiChoice = ({ options, onSelected, multipleResponse }) => {
    const [selected, setSelected] = useState(multipleResponse ? [] : "");

    const changeSelected = (option) => {
        if (multipleResponse) {
            if (selected.includes(option)) {
                setSelected(selected.filter((value) => value !== option));
            } else {
                setSelected([...selected, option]);
            }
        } else {
            setSelected(option);
        }
        onSelected(option);
    };

    return (
        <div className="flex flex-row items-center max-w-full flex-wrap justify-around gap-4">
            {options.map((option) => (
                <Option
                    key={option}
                    onClickOption={() => changeSelected(option)}
                    value={option}
                    isSelected={multipleResponse ? selected.some((o) => o === option) : selected === option}
                />
            ))}
        </div>
    );
};

export default MultiChoice;
