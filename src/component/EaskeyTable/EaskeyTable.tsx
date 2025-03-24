import React, { useState,useEffect } from 'react';
import './EaskeyTable.css'

interface Column {
    title: string;
    dataIndex: string;
    key: string;
    renderingMethod?: (row: any) => void;
}

interface TreeNode {
    [key: string]: any;
    children?: TreeNode[];
}

interface Props {
    columns: Column[];
    dataSource?: TreeNode[]; // 这里可以根据实际情况定义接口
    style?: React.CSSProperties;
    expandedAll?: boolean;
    onToggleAll?: (expanded: boolean) => void;
}

const EaskeyTable: React.FC<Props> = ({ columns, dataSource, style, expandedAll = false, onToggleAll }) => {
    const [expandedKeys, setExpandedKeys] = useState<Set<number | string>>(new Set());

    useEffect(() => {
        if (onToggleAll) {
            if (expandedAll) {
                const allKeys = getAllKeys(dataSource);
                setExpandedKeys(new Set(allKeys));
            } else {
                setExpandedKeys(new Set());
            }
        }
        // eslint-disable-next-line
    }, [expandedAll, dataSource, onToggleAll]);
    const getAllKeys = (data: TreeNode[] = []): Array<number | string> => {
        return data.reduce((keys: Array<number | string>, record: TreeNode) => {
            keys.push(record.id);
            if (record.children && expandedKeys.has(record.id)) {
                keys.push(...getAllKeys(record.children));
            }
            return keys;
        }, []);
    };
    
    const toggleExpand = (key: number | string) => {
        const newExpandedKeys = new Set(expandedKeys);
        if (newExpandedKeys.has(key)) {
            newExpandedKeys.delete(key);
        } else {
            newExpandedKeys.add(key);
        }
        setExpandedKeys(newExpandedKeys);
    };

    const renderRows = (data: TreeNode[], level = 0): JSX.Element[] => {
        return data.map((record, index) => (
            <React.Fragment key={`${record.id}-${level}-${index}`}>
                <tr>
                    {columns.map((column, columnIndex) => (
                        <td key={column.key} style={{ paddingLeft: `${columnIndex === 0 ? (level * 20) : '8'}px` }}>
                            {columnIndex === 0 && record.children && record.children.length > 0 && (
                                <button
                                    className="toggle-button"
                                    onClick={() => toggleExpand(record.id)}
                                >
                                    {expandedKeys.has(record.id) ? '▼' : '►'}
                                </button>
                            )}
                            {column.renderingMethod ? column.renderingMethod(record) : record[column.key]}

                        </td>
                    ))}
                </tr>
                {expandedKeys.has(record.id) && record.children && renderRows(record.children, level + 1)}
            </React.Fragment>
        ));
    };
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
                {dataSource && renderRows(dataSource)}
                {/* {dataSource && dataSource.map((record, index) => (
                    <tr key={index}>
                        {columns.map(column => (
                            <td key={column.key}>
                                {column.renderingMethod ? column.renderingMethod(record) : record[column.key]}
                            </td>
                        ))}
                    </tr>
                ))} */}
            </tbody>
        </table>
    );
};

export default EaskeyTable;