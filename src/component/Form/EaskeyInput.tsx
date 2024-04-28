import React from 'react';
import '../../assets/css/Form/index.css'

interface InputProps {
    label: string;
    value: string;
    type: string;
    style?: React.CSSProperties;
    imgSrc?: string | null | undefined;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onImgClick?: () => void;
}

const EaskeyInput: React.FC<InputProps> = ({ label, type, value, style, imgSrc, onChange, onImgClick }) => {

    const inputStyle: React.CSSProperties = imgSrc ? {
        borderRadius: '0',
        width: `calc(100% - 140px)`,
    } : {};

    return (
        <div className="input-group" style={style}>
            <label>{label}</label>
            <input type={type} value={value} onChange={onChange} style={inputStyle} />
            {imgSrc && <img src={imgSrc} onClick={onImgClick} alt="" />}
        </div>
    );
};

export default EaskeyInput;