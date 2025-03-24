import React from 'react';

import Collapse from '@/component/Collapse/Collapse';
import Panel from '@/component/Collapse/Panel';
import { Row, Col, Grid } from '@/component/Grid/Grid';


const GridComponents: React.FC = () => {
    return (
        <div className="App">
            <Collapse
                defaultActiveKey={[0]}
                onChange={(key: number) => {
                    // console.log(`面板 ${key} 被展开了`);
                }}
            >
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
    );
};

export default GridComponents;