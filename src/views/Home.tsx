import React from 'react';
import Collapse from '../component/Collapse/Collapse';
import Panel from '../component/Collapse/Panel';

const Home: React.FC = () => {

    return (
        <div style={{width:'98%',marginLeft:'1%',marginTop:'10px'}}>
            <div style={{ width: '400px' }}>
                <Collapse
                    defaultActiveKey={[0]}
                    onChange={(key: number) => {
                        // console.log(`面板 ${key} 被展开了`);
                    }}
                >
                    <Panel header="按钮">
                        <div style={{ padding: '15px' }}>
                            <div className='btn glow-btn glow-btn-primary'>提交</div>
                        </div>
                    </Panel>
                    <Panel header="面板标题2">
                        <p>面板内容2</p>
                    </Panel>
                </Collapse>
            </div>


        </div >
    );
};

export default Home;