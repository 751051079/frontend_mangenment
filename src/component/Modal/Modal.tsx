import React from 'react';
import './Modal.css'; // 导入样式文件

interface ModalProps {
    isOpen: boolean;
    title?: string;
    onClose: () => void;
    children: React.ReactElement
}

const Modal: React.FC<ModalProps> = ({ isOpen, title = '标题', onClose, children }) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div className="modal">
            <div className="modal-content">
                <div className='modal-header'>
                    <span><b>{title}</b></span>
                    <span className="close" onClick={onClose}>
                        &times;
                    </span>
                </div>
                <div style={{marginBottom:'50px'}}>
                    {children}
                </div>

                <div className='modal-bottom'>
                    <div className='btn glow-btn glow-btn-primary m-left-10' onClick={onClose}>
                        提交
                    </div>
                    <div className='btn glow-btn outline-glow-btn-secondary m-left-10' onClick={onClose}>
                        关闭
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
