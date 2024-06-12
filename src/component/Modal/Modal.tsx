import React from 'react';
import './Modal.css'; // 导入样式文件

interface ModalProps {
    isOpen: boolean;
    title?: string;
    onClose?: () => void;
    onSubmit?: () => void;
    children?: React.ReactElement | React.ReactElement[] | React.ReactNode | React.ReactNode[];
}

const Modal: React.FC<ModalProps> = ({ isOpen, title = '标题', onSubmit, onClose, children }) => {
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
                <div style={{overflowY:'scroll',maxHeight:'430px'}}>
                    {children}
                </div>

                <div className='modal-bottom'>
                    <div className='btn glow-btn glow-btn-primary m-left-10' onClick={onSubmit}>
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
