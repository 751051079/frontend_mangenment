import React from 'react';
import './CustomAlert.css'; // 引入样式文件

interface CustomAlertProps {
    message: string;
    title?: string;
    onConfirm?: () => void;
    onConfirmText?: string; // 可选的确认按钮文本
    onCancel?: () => void;
    onCancelText?: string; // 可选的取消按钮文本
}

const CustomAlert: React.FC<CustomAlertProps> = ({ message, onConfirm, onCancel, title = '提示', onConfirmText = '确认', onCancelText = '取消' }) => {
    return (
        <div className='custom-alert-overlay'>

            <div className="custom-alert">
                <div className='custom-alert-title'>{title}</div>
                <div>
                    <p>{message}</p>
                    <div className="button-container">
                        <button className='cancel-btn' onClick={onCancel}>{onCancelText}</button>
                        <button className='confirm-btn' onClick={onConfirm}>{onConfirmText}</button>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default CustomAlert;