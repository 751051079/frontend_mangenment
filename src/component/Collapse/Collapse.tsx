import React, { useState } from 'react';
import Accordion from './Accordion';

interface PanelProps {
    header: string;
    key: string;
    children: React.ReactNode;
}

interface CollapseProps {
    defaultActiveKey?: number[];
    onChange?: (key: number) => void;
    children: React.ReactElement<PanelProps>[];
}

const Collapse: React.FC<CollapseProps> = ({
    defaultActiveKey = [0],
    onChange,
    children,
}) => {
    const [activeKeys, setActiveKeys] = useState<number[]>(defaultActiveKey);

    const handlePanelChange = (key: number) => {
        const index = activeKeys.indexOf(key);
        let newActiveKeys: number[];

        if (index === -1) {
            newActiveKeys = [...activeKeys, key];
        } else {
            newActiveKeys = [...activeKeys.slice(0, index), ...activeKeys.slice(index + 1)];
        }

        setActiveKeys(newActiveKeys);

        if (onChange) {
            onChange(key);
        }
    };

    return (
        <Accordion
            items={React.Children.map(children, (child, index) => ({
                title: child.props.header,
                content: child.props.children,
                isActive: activeKeys.includes(index),
            }))}
            onToggle={handlePanelChange}
        />
    );
};

export default Collapse;