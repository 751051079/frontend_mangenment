import React, { useState,ChangeEvent } from "react";

interface EaskeyFormRadioProps {
    title?: string;
    options: any[];
    defaultValue: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    labelStyle?: React.CSSProperties;
    style?: React.CSSProperties;
}


const EaskeyFormRadio: React.FC<EaskeyFormRadioProps> = ({ style, labelStyle, title = '默认标题', options, defaultValue, onChange }) => {
    const [selectedValue, setSelectedValue] = useState(defaultValue);

    const handleRadioChange = (e:ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setSelectedValue(newValue);
        onChange(e);
    };

    return (
        <div style={{ display: 'flex',marginTop:'20px', width: '100%', ...style }}>
            <div style={{ ...labelStyle }}>{title}</div>
            <div style={{display:'flex',flex:'1'}}>
                {options.map((option,index) => (
                    <label key={index} style={{ marginRight: '15px' }}>
                        <input
                            type="radio"
                            data-keys={option.key}
                            value={option.value}
                            checked={selectedValue === option.value}
                            onChange={handleRadioChange}
                            style={{ marginRight: '5px' }}
                        />
                        {option.value}
                    </label>
                ))}
            </div>

        </div>
    );
}

export default EaskeyFormRadio;
