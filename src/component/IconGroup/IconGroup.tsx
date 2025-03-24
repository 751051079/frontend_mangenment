import React, { useState, useEffect } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Icon from './Icon.json'
import './IconGroup.css'

// 将所有图标添加到库中
library.add(fas);

// 定义图标组件 Props 类型
interface IconGroupProps {
    onClick: (e: string) => void
}

// 自定义图标组件
const IconGroup: React.FC<IconGroupProps> = ({ onClick }) => {
    let [iconNames, setIconNames] = useState<string[]>([])

    useEffect(() => {
        setIconNames(Icon.icons);
    }, []);

    const hanldClickEvent=(name:string)=>{
        onClick(name)
    }

    return (
        <div className="icon-group">
            {iconNames.map((name, index) => (
                <FontAwesomeIcon className="icon" onClick={()=>hanldClickEvent(name)} key={index} icon={name as any} />
            ))}
        </div>
    );
};

export default IconGroup;