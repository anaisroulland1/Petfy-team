import React, { useState } from "react";
import Option from "./Option";

const Select = ({ options, isVisible, isSelectionned, onClickSelect, selectedOptionValue, onSelected, label }) => {
    const onClickOption = (e) => {
        e.preventDefault();
        e.stopPropagation();
        onSelected(e.target.value);
    };

    return (
        <>
            {isVisible ? (
                isSelectionned ? (
                    <button
                        onClick={onClickSelect}
                        className="border-2 max-h-96 text-secondary w-full border-secondary rounded-lg p-2 bg-gradient-to-b from-bgstart to-bgend"
                    >
                        {label}
                        <img src="/images/dropdown.png" alt="dropdown" className="w-6 float-right" />
                        <div className="flex flex-col gap-2 max-h-80 overflow-scroll p-4">
                            {options.map((option) => {
                                return (
                                    <>
                                        {selectedOptionValue === option ? (
                                            <Option key={option} onClickOption={onClickOption} value={option} isSelected={true} />
                                        ) : (
                                            <Option key={option} onClickOption={onClickOption} value={option} isSelected={false} gradient={true} />
                                        )}
                                    </>
                                );
                            })}
                        </div>
                    </button>
                ) : (
                    <button onClick={onClickSelect} className="border-2 text-secondary w-full border-secondary rounded-lg p-2 bg-primary">
                        {label}
                        <img src="/images/dropdown.png" alt="dropdown" className="w-6 float-right" />
                    </button>
                )
            ) : null}
        </>
    );
};

export default Select;
