import React, { useEffect, useCallback } from 'react';
import './Message.css';

interface MessageProps {
    message: MessageType[];
    onClose: (id: number) => void;
}

interface MessageType {
    id: number;
    text: string;
    type?: 'success' | 'danger' | 'warning' | 'info';
}

const Message: React.FC<MessageProps> = ({ message, onClose }) => {

    const handleClose = useCallback((id: number) => {

        onClose(id);

    }, [onClose]);

    useEffect(() => {
        const handleCloseRef = () => {
            if (message.length > 0) {
                const timer = setTimeout(() => {
                    handleClose(message[0].id); // 自动关闭消息
                }, 5000); // 5秒后自动关闭
                return () => clearTimeout(timer);
            }
        };

        handleCloseRef();
    }, [message, handleClose])



    return (
        <div className='message-container'>
            {
                message.map((item, index) => {
                    return (
                        <div key={item.id} className={`message ${item.type}`}>
                            <span className="message-text">{item.text}</span>
                            <button className="close-button" onClick={() => handleClose(item.id)}>
                                &times;
                            </button>
                        </div>
                    );
                })
            }
        </div>
    );
};


export interface MessagesProps {
    id: number;
    text: string;
    type?: 'success' | 'danger' | 'warning' | 'info';
}
export default Message;