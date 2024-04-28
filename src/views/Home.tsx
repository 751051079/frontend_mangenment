import React, { useState } from 'react';
import Collapse from '@/component/Collapse/Collapse';
import Panel from '@/component/Collapse/Panel';
import CustomAlert from '@/component/CustomAlert/CustomAlert';


const Home: React.FC = () => {
    const [showAlert, setShowAlert] = useState(false);

    const handleAlert = () => {
        setShowAlert(true);
    };

    const handleCancelAlert = async () => {
        console.log('点击了取消按钮');
        setShowAlert(false);
    };

    const handleConfirmAlert = async () => {
        console.log('点击了确认按钮');
        setShowAlert(false);
    };

    return (
        <div style={{ width: '98%', marginLeft: '1%', marginTop: '10px' }}>
            <div style={{ width: '400px' }}>
                <Collapse
                    defaultActiveKey={[0]}
                    onChange={(key: number) => {
                        // console.log(`面板 ${key} 被展开了`);
                    }}
                >
                    <Panel header="流光按钮">
                        <div style={{ padding: '15px' }}>
                            <div className='btn glow-btn glow-btn-primary'>primary</div>
                            <div className='btn glow-btn glow-btn-secondary m-left-10'>secondary</div>
                            <div className='btn glow-btn glow-btn-success m-left-10'>success</div>
                            <div className='btn glow-btn glow-btn-danger m-left-10'>danger</div>
                            <div className='btn glow-btn glow-btn-warning m-left-10'>warning</div>
                            <div className='btn glow-btn glow-btn-info m-left-10'>info</div>
                        </div>
                    </Panel>

                    <Panel header="线性流光按钮">
                        <div style={{ padding: '15px' }}>
                            <div className='btn glow-btn outline-glow-btn-primary'>primary</div>
                            <div className='btn glow-btn outline-glow-btn-secondary m-left-10'>secondary</div>
                            <div className='btn glow-btn outline-glow-btn-success m-left-10'>success</div>
                            <div className='btn glow-btn outline-glow-btn-danger m-left-10'>danger</div>
                            <div className='btn glow-btn outline-glow-btn-warning m-left-10'>warning</div>
                            <div className='btn glow-btn outline-glow-btn-info m-left-10'>info</div>
                        </div>
                    </Panel>

                    <Panel header="禁用流光按钮">
                        <div style={{ padding: '15px' }}>
                            <div className='btn glow-btn glow-btn-primary disabled-btn'>primary</div>
                            <div className='btn glow-btn glow-btn-secondary disabled-btn m-left-10'>secondary</div>
                            <div className='btn glow-btn glow-btn-success disabled-btn m-left-10'>success</div>
                            <div className='btn glow-btn glow-btn-danger disabled-btn m-left-10'>danger</div>
                            <div className='btn glow-btn glow-btn-warning disabled-btn m-left-10'>warning</div>
                            <div className='btn glow-btn glow-btn-info disabled-btn m-left-10'>info</div>
                        </div>
                    </Panel>

                    <Panel header="弹窗">
                        <div style={{ padding: '15px' }}>
                            <div className='btn glow-btn glow-btn-primary' onClick={handleAlert}>弹窗</div>

                        </div>
                    </Panel>
                </Collapse>
            </div>
            {showAlert && <CustomAlert message="这是一个消息弹窗" onConfirm={handleConfirmAlert} onCancel={handleCancelAlert} />}
        </div >
    );
};

export default Home;