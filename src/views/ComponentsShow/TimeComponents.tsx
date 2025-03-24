import React from 'react';

import Collapse from '@/component/Collapse/Collapse';
import Panel from '@/component/Collapse/Panel';

import FlipClock from '@/component/FlipClock/FlipClock';

const TimeComponents: React.FC = () => {
    return (
        <div className="App">
            <Collapse
                defaultActiveKey={[0]}
                onChange={(key: number) => {
                    // console.log(`面板 ${key} 被展开了`);
                }}
            >
                <Panel header="时间翻转卡片">
                    <div style={{ padding: '15px' }}>
                        <FlipClock />
                    </div>

                </Panel>
            </Collapse>
        </div>
    );
};

export default TimeComponents;