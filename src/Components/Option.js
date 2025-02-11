import React from "react";

const Option = ({ value, onClickOption, isSelected, gradient }) => {
    return (
        <>
            {isSelected ? (
                <button
                    onClick={onClickOption}
                    value={value}
                    className="min-w-20 max-w-32 w-fit border-2 text-primarytext border-secondary rounded-lg p-2 bg-secondary"
                >
                    {value}
                </button>
            ) : gradient ? (
                <button
                    onClick={onClickOption}
                    value={value}
                    className="min-w-20 max-w-32 w-fit border-2 max-h-96 text-secondarytext border-secondary rounded-lg p-2 bg-gradient-to-r from-bgstart to-bgend"
                >
                    {value}
                </button>
            ) : (
                <button
                    onClick={onClickOption}
                    value={value}
                    className="min-w-20 max-w-32 w-fit border-2 text-secondarytext border-secondary rounded-lg p-2 bg-primary"
                >
                    {value}
                </button>
            )}
        </>
    );
};

export default Option;
