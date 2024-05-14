import React, { useState, useEffect } from 'react';

interface SelectOption {
    value: string;
    label: string;
}

interface SelectProps {
    options: SelectOption[];
    defaultValue?: string;
    onChange?: (value: string) => void;
    filterable?: boolean;
    className?: string; // 新增className属性，用于外部传入额外的CSS类
}

const Select: React.FC<SelectProps> = ({ options, defaultValue, onChange, filterable = true, className }) => {
    const [selectedValue, setSelectedValue] = useState(defaultValue || '');
    const [filteredOptions, setFilteredOptions] = useState(options);

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedOption = event.target.value;
        setSelectedValue(selectedOption);
        if (onChange) {
            onChange(selectedOption);
        }
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        if (inputValue === '') {
            setFilteredOptions(options);
        } else {
            const filtered = options.filter(option => option.label.toLowerCase().includes(inputValue.toLowerCase()));
            setFilteredOptions(filtered);
        }
    };

    useEffect(() => {
        setFilteredOptions(options);
    }, [options]);

    return (
        <div className={`select-container ${className || ''}`}>
            {filterable && (
                <input type="text" placeholder="Search..." onChange={handleInputChange} />
            )}
            <select value={selectedValue} onChange={handleSelectChange}>
                <option value="">请选择</option>
                {filteredOptions.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Select;