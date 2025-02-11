import React, { useState } from "react";
import Select from "./Select";

const MultiSelect = ({ options, onSelected, selectedOption }) => {
    const [selectedSelectKey, setSelectedSelectKey] = useState(null);

    const onClickSelect = (key) => {
        if (selectedSelectKey == key) {
            setSelectedSelectKey(null);
        } else {
            setSelectedSelectKey(key);
        }
    };

    return (
        <div className="flex flex-col gap-4 max-h-96 w-3/5 ">
            {Object.keys(options).map((key) => {
                return (
                    <Select
                        isVisible={selectedSelectKey == null || selectedSelectKey == key}
                        isSelectionned={selectedSelectKey == key}
                        onClickSelect={() => onClickSelect(key)}
                        key={key}
                        label={key}
                        options={options[key]}
                        onSelected={onSelected}
                        selectedOptionValue={selectedOption}
                    />
                );
            })}
        </div>
    );
};

export default MultiSelect;
