import React, { useState } from "react";

interface EaskeyFormRadioProps{
    title?:string;
    options:any[];
    defaultValue:string;
    onChange:(val:object)=>void;
}


const EaskeyFormRadio: React.FC<EaskeyFormRadioProps> = ({ title='默认标题',options, defaultValue, onChange }) => {
    const [selectedValue, setSelectedValue] = useState(defaultValue);

    const handleRadioChange = (e:any) => {
        const newValue = e.target.value;
        setSelectedValue(newValue);
        onChange(newValue);
    };

    return (
        <div>
            <label style={{marginRight:'20px'}}>{title}</label>
            {options.map((option) => (
                <label key={option.id} style={{marginRight:'15px'}}>
                    <input
                        type="radio"
                        value={option.value}
                        checked={selectedValue === option.value}
                        onChange={handleRadioChange}
                        style={{marginRight:'5px'}}
                    />
                    {option.value}
                </label>
            ))}
        </div>
    );
}

export default EaskeyFormRadio;
