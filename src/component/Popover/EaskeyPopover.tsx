import React, { useState } from 'react';
import './EaskeyPopover.css';

interface EaskeyPopoverProps {
    title: string;
    content?: React.ReactNode;
    children?: React.ReactElement | React.ReactElement[] | React.ReactNode | React.ReactNode[];
}

const EaskeyPopover: React.FC<EaskeyPopoverProps> = ({ title, content, children }) => {
    const [visible, setVisible] = useState(false);

    const handleClickEvent = () => {

        setVisible(!visible);
    };

    return (
        <div className="popover" onClick={handleClickEvent}>
            {content}
            {visible && (
                <div className="popover-content">
                    <div className="popover-arrow" />
                    <div className="popover-inner">
                        <div className="popover-header">{title}</div>
                        <div className="popover-body">{children}</div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EaskeyPopover;