import React from 'react';

import Collapse from '@/component/Collapse/Collapse';
import Panel from '@/component/Collapse/Panel';
import LazyImage from '@/component/LazyImage/LazyImage';


const ImagesComponents: React.FC = () => {
    return (
        <div className="App">
            <Collapse
                defaultActiveKey={[0]}
                onChange={(key: number) => {
                    // console.log(`面板 ${key} 被展开了`);
                }}
            >
                <Panel header="懒加载图片">
                        <div style={{ padding: '15px' }}>
                            <LazyImage
                                src="https://tse3-mm.cn.bing.net/th/id/OIP-C.PVy3hGDSpdgmsE-aGD2ZOgHaEK?w=322&h=187&c=7&r=0&o=5&pid=1.7"
                                alt="Real Image"
                                placeholder="data:image/jpeg;base64,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"
                            />
                        </div>
                    </Panel>
            </Collapse>
        </div>
    );
};

export default ImagesComponents;