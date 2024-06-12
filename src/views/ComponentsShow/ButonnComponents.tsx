import React from 'react';

import Collapse from '@/component/Collapse/Collapse';
import Panel from '@/component/Collapse/Panel';


const ButtonComponents: React.FC = () => {
    return (
        <div className="App">
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



            </Collapse>
        </div>
    );
};

export default ButtonComponents;