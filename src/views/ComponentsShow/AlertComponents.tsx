import React, { useState } from 'react';

import Collapse from '@/component/Collapse/Collapse';
import Panel from '@/component/Collapse/Panel';
import Modal from '@/component/Modal/Modal'
import Message, { MessagesProps } from '@/component/Message/Message';
import CustomAlert from '@/component/CustomAlert/CustomAlert';



const AlertComponents: React.FC = () => {
    const [showAlert, setShowAlert] = useState(false);
    const [isOpens, setIsOpens] = useState(false)
    const [messages, setMessages] = useState<MessagesProps[]>([]);
    const [nextId, setNextId] = useState(0);


    const handleAlert = () => {
        setShowAlert(true);
    };
    const handleAddMessage = (text: string, type: 'success' | 'danger' | 'warning' | 'info') => {
        const newMessage = { id: nextId, text, type };
        setMessages((prevMessages) => [...prevMessages, newMessage]);
        setNextId((prevId) => prevId + 1);
    };
    const handleCancelAlert = async () => {
        console.log('点击了取消按钮');
        setShowAlert(false);
    };

    const handleConfirmAlert = async () => {
        console.log('点击了确认按钮');
        setShowAlert(false);
    };
    const handleCloseMessage = (id: number) => {
        setMessages((prevMessages) => prevMessages.filter((message) => message.id !== id));
    };


    return (
        <div className="App">
            <Collapse
                defaultActiveKey={[0]}
                onChange={(key: number) => {
                    // console.log(`面板 ${key} 被展开了`);
                }}
            >
                <Panel header="弹窗">
                    <div style={{ padding: '15px' }}>
                        <div className='btn glow-btn glow-btn-primary' onClick={handleAlert}>消息提示框</div>
                        <div className='btn glow-btn glow-btn-primary' onClick={() => setIsOpens(true)}>内容弹窗</div>

                    </div>
                </Panel>
                <Panel header="系统消息提示框">
                    <div style={{ padding: '15px' }}>
                        <div className='btn glow-btn glow-btn-success m-left-10' onClick={() => handleAddMessage('操作成功！', 'success')}>显示成功消息</div>
                        <div className='btn glow-btn glow-btn-danger m-left-10' onClick={() => handleAddMessage('发生错误！', 'danger')}>显示错误消息</div>
                        <div className='btn glow-btn glow-btn-warning m-left-10' onClick={() => handleAddMessage('提示警告！', 'warning')}>显示警告消息</div>
                        <div className='btn glow-btn glow-btn-info m-left-10' onClick={() => handleAddMessage('发送信息。', 'info')}>显示提示消息</div>
                    </div>
                </Panel>
            </Collapse>
            {messages && <Message message={messages} onClose={handleCloseMessage} />}
            {showAlert && <CustomAlert message="这是一个消息弹窗" onConfirm={handleConfirmAlert} onCancel={handleCancelAlert} />}
            <Modal isOpen={isOpens} onClose={() => setIsOpens(false)}>
                <div>我是内容</div>
            </Modal>
        </div>
    );
};

export default AlertComponents;