import React, { useState, useEffect, useRef } from 'react';
import './css/EaskeyFormInput.css'

interface EaskeySelectOption {
    value: string;
    label: string;
}

interface SelectProps {
    options: EaskeySelectOption[];
    defaultValue: string;
    onChange?: (value: EaskeySelectOption) => void;
    filterable?: boolean;
    className?: string;
    lable?: string
}

const EaskeySelect: React.FC<SelectProps> = ({ lable, options, defaultValue, onChange, filterable = true, className }) => {
    const [selectedValue, setSelectedValue] = useState(defaultValue);
    const [filteredOptions, setFilteredOptions] = useState(options);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const handleSelectChange = (option: EaskeySelectOption) => {
        setSelectedValue(option.label);
        setIsDropdownOpen(false);
        if (onChange) {
            onChange(option);
        }
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value)
        const inputValue = event.target.value;
        setSelectedValue(event.target.value)
        if (inputValue === '') {
            setFilteredOptions(options);
        } else {
            const filtered = options.filter(option => option.label.toLowerCase().includes(inputValue.toLowerCase()));
            setFilteredOptions(filtered);
        }
        setIsDropdownOpen(true);
    };

    const handleDocumentClick = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setIsDropdownOpen(false);
        }
    };

    useEffect(() => {
        setFilteredOptions(options);
    }, [options]);

    useEffect(() => {
        if (isDropdownOpen) {
            document.addEventListener('click', handleDocumentClick);
        } else {
            document.removeEventListener('click', handleDocumentClick);
        }
        return () => {
            document.removeEventListener('click', handleDocumentClick);
        };
    }, [isDropdownOpen]);

    return (
        <div className='input-with-label' ref={dropdownRef}>
            <div style={{ width: '20%', textAlign: 'right' }}>{lable}</div>
            <div style={{ flex: '1' ,position:'relative'}}>
                {filterable && (
                    <input
                        type="text"
                        placeholder="选择打开方式"
                        onChange={handleInputChange}
                        value={selectedValue}
                        onClick={() => setIsDropdownOpen(true)}
                        className={'input-field'}
                    />
                )}
                <div style={{ ...styles.selectDropdown, display: isDropdownOpen ? 'block' : 'none' }}>
                    {filteredOptions.map(option => (
                        <div
                            key={option.value}
                            style={styles.selectOption}
                            onClick={() => handleSelectChange(option)}
                        >
                            {option.label}
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

const styles: { [key: string]: React.CSSProperties } = {
    selectContainer: {
        position: 'relative',
        width: '100%',
        maxWidth: '300px',
        margin: '0 auto',
    },
    searchInput: {
        width: '100%',
        padding: '8px',
        marginBottom: '8px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        boxSizing: 'border-box',
    },
    selectDropdown: {
        width: '83%',
        padding: '4px 6px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        backgroundColor: '#fff',
        cursor: 'pointer',
        boxSizing: 'border-box',
        position: 'absolute',
        top: '35px', // Adjust based on input height
        zIndex: 1,
    },
    selectOption: {
        padding: '8px',
        backgroundColor: '#fff',
    },
};

export default EaskeySelect;