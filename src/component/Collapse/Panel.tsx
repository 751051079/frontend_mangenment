import React from 'react';

interface PanelProps {
    header: string;
    children: React.ReactNode;
}

const Panel: React.FC<PanelProps> = ({ header, children }) => {
    return (
        <div style={{padding:'15px'}}>
            <div>{header}</div>
            <div>{children}</div>
        </div>
    );
};

export default Panel;