import React from 'react';

import Collapse from '@/component/Collapse/Collapse';
import EaskeyTable from '@/component/EaskeyTable/EaskeyTable';
import Panel from '@/component/Collapse/Panel';


const TableComponents: React.FC = () => {
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
    ];

    const dataSource = [
        { id: '1', name: 'John Brown', age: 32, address: 'New York No. 1 Lake Park' },
        { id: '2', name: 'Jim Green', age: 42, address: 'London No. 1 Lake Park' },
        { id: '3', name: 'Joe Black', age: 32, address: 'Sidney No. 1 Lake Park' },
    ];
    return (
        <div className="App">
            <Collapse
                defaultActiveKey={[0]}
                onChange={(key: number) => {
                    // console.log(`面板 ${key} 被展开了`);
                }}
            >
                <Panel header="表格">
                    <div style={{ padding: '15px' }}>
                        <EaskeyTable columns={columns} dataSource={dataSource}></EaskeyTable>

                    </div>
                </Panel>
            </Collapse>
        </div>
    );
};

export default TableComponents;