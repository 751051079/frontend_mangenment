
import React from 'react';

import Collapse from '@/component/Collapse/Collapse';
import Panel from '@/component/Collapse/Panel';
import ImageUploadBase64 from '@/component/ImageUpload/ImageUploadBase64';
import DragAndDropUploadImages from '@/component/ImageUpload/DragAndDropUploadImages';
import MultiImageUpload from '@/component/ImageUpload/MultiImageUpload';

const UploadImageBaseComponents: React.FC = () => {
    return (
        <div className="App">
            <Collapse
                defaultActiveKey={[0]}
                onChange={(key: number) => {
                    // console.log(`面板 ${key} 被展开了`);
                }}
            >
                <Panel header="上传图片转换base64">
                    <div style={{ padding: '15px' }}>
                        <ImageUploadBase64 />
                    </div>

                </Panel>
                <Panel header="拖放上传">
                    <div style={{ padding: '15px' }}>
                        <DragAndDropUploadImages />
                    </div>

                </Panel>
                <Panel header="多文件上传上传">
                    <div style={{ padding: '15px' }}>
                        <MultiImageUpload />
                    </div>

                </Panel>
            </Collapse>
        </div>
    );
};

export default UploadImageBaseComponents;