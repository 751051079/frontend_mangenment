import React from 'react';
import './EaskeyTable.css'

interface Column {
    title: string;
    dataIndex: string;
    key: string;
}

interface Props {
    columns: Column[];
    dataSource: any[]; // 这里可以根据实际情况定义接口
    style?:React.CSSProperties;
}

const EaskeyTable: React.FC<Props> = ({ columns, dataSource,style }) => {
    return (
        <table style={style}>
            <thead>
                <tr>
                    {columns.map(column => (
                        <th key={column.key}>{column.title}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {dataSource.map((record, index) => (
                    <tr key={index}>
                        {columns.map(column => (
                            <td key={column.key}>{record[column.dataIndex]}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default EaskeyTable;