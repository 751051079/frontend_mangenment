import React, { ReactNode } from 'react';
import './Grid.css'; // 导入样式文件

interface ColProps {
    span: number;
    padding?: string;
    children?: ReactNode
    align?: 'left' | 'right' | 'center'
}

const Col: React.FC<ColProps> = ({ span, align, padding, children }) => {
    return (
        <div className={`col col-${span}`} style={{ padding: padding + 'px', textAlign: align }}>
            {children}
        </div>
    );
};

interface RowProps {
    gutter?: number;
    justify?: 'start' | 'end' | 'center' | 'space-between' | 'space-around';
    align?: 'top' | 'middle' | 'bottom';
    children?: ReactNode;
    marginTop?: number
}

const Row: React.FC<RowProps> = ({ gutter = 0, justify = 'start', align = 'middle', marginTop, children }) => {
    const gutterStyle = gutter ? { marginLeft: -gutter / 2 + 'px', marginRight: -gutter / 2 + 'px' } : {};
    const justifyStyle = justify ? { justifyContent: justify } : {};
    const alignStyle = align ? { alignItems: align } : {};

    return (
        <div className="row" style={{ ...gutterStyle, ...justifyStyle, ...alignStyle, marginTop: marginTop + 'px' }}>
            {children}
        </div>
    );
};

const Grid: React.FC<{ children?: ReactNode }> = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    );
};

export { Row, Col, Grid };