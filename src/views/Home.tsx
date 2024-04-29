import React, { useState } from 'react';
import Collapse from '@/component/Collapse/Collapse';
import Panel from '@/component/Collapse/Panel';
import CustomAlert from '@/component/CustomAlert/CustomAlert';
import { Row, Col, Grid } from '@/component/Grid/Grid'; // 导入封装的组件

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
                    <Panel header="栅格布局">
                        <div style={{ padding: '15px' }}>
                            <Grid>
                                <Row gutter={0} marginTop={10}>
                                    <Col span={8} align='center'><div style={{ width: '100%', height: '50px', backgroundColor: '#1677ff', color: '#fff' }}>Column 1</div></Col>
                                    <Col span={8} align='center'><div style={{ width: '100%', height: '50px', backgroundColor: '#1677ffbf', color: '#fff' }}>Column 2</div></Col>
                                    <Col span={8} align='center'><div style={{ width: '100%', height: '50px', backgroundColor: '#1677ff', color: '#fff' }}>Column 3</div></Col>
                                </Row>
                                <Row gutter={0} marginTop={10}>
                                    <Col span={6} align='center'><div style={{ width: '100%', height: '50px', backgroundColor: '#1677ff', color: '#fff' }}>Column 1</div></Col>
                                    <Col span={6} align='center'><div style={{ width: '100%', height: '50px', backgroundColor: '#1677ffbf', color: '#fff' }}>Column 2</div></Col>
                                    <Col span={6} align='center'><div style={{ width: '100%', height: '50px', backgroundColor: '#1677ff', color: '#fff' }}>Column 3</div></Col>
                                    <Col span={6} align='center'><div style={{ width: '100%', height: '50px', backgroundColor: '#1677ffbf', color: '#fff' }}>Column 4</div></Col>
                                </Row>
                            </Grid>

                        </div>
                    </Panel>
                </Collapse>
            </div>
            {showAlert && <CustomAlert message="这是一个消息弹窗" onConfirm={handleConfirmAlert} onCancel={handleCancelAlert} />}
        </div >
    );
};

export default Home;