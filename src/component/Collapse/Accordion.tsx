import React from 'react';
import './index.css'

interface PanelProps {
    title: string;
    content: React.ReactNode;
    isActive: boolean;
    onToggle: () => void;
}

const Panel: React.FC<PanelProps> = ({ title, content, isActive, onToggle }) => {
    return (
        <div className="panel" style={{ border: '1px solid #ccc', borderRadius: '8px', marginBottom: '10px', overflow: 'hidden' }}>
            <div className="panel-header" onClick={onToggle} style={{ cursor: 'pointer', backgroundColor: 'white', padding: '10px', borderBottom: '1px solid #ccc',color:'rgb(103, 106, 108)' }}>
                <span style={{ fontSize:'14px' }}>{title}</span>
                <span style={{ transition: 'transform 0.3s', transform: isActive ? 'rotate(180deg)' : 'rotate(0)', transformOrigin: '50% 50%', fontSize: '14px' }}>▲</span>
            </div>
            <div className="panel-content" style={{ transition: 'max-height 0.3s', maxHeight: isActive ? '1000px' : '0', overflow: 'hidden',backgroundColor: 'white' }}>{content}</div>
        </div>
    );
};

interface AccordionProps {
    items: { title: string; content: React.ReactNode; isActive: boolean }[];
    onToggle: (index: number) => void;
}

const Accordion: React.FC<AccordionProps> = ({ items, onToggle }) => {
    return (
        <div>
            {items.map((item, index) => (
                <Panel
                    key={index}
                    title={item.title}
                    content={item.content}
                    isActive={item.isActive}
                    onToggle={() => onToggle(index)}
                />
            ))}
        </div>
    );
};

export default Accordion;