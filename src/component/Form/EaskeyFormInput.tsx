import React, { ChangeEvent } from "react";
import './css/EaskeyFormInput.css'

interface EaskeyFormInputProps {
    label: string;
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    type?: string;
    labelStyle?: React.CSSProperties;
    style?: React.CSSProperties
}

const EaskeyFormInput: React.FC<EaskeyFormInputProps> = ({ style, labelStyle, label, value, onChange, type = 'text' }) => {
    return (
        <div className="input-with-label" style={{ marginTop:'20px',...style }}>
            <div style={{ ...labelStyle }}>{label}</div>
            <div style={{flex:'1'}}>
                <input
                    type={type}
                    value={value}
                    onChange={onChange}
                    className="input-field"
                />
            </div>

        </div>
    )
}

export default EaskeyFormInput;