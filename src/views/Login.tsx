import React, { useState } from 'react';
import StarBackground from '../component/LoginBackground/StarBackground';
import Sky from '../component/LoginBackground/Sky';
import '../assets/css/sys.css'
import '../assets/css/Login/index.css'

const Login = () => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };



    return (
        <div className={`app ${theme} login-page`}>
            <button onClick={toggleTheme}>切换主题</button>
            <p>这是一个使用 {theme === 'light' ? '亮色' : '暗色'} 主题的应用程序。</p>
            <StarBackground />
            <Sky />
        </div>
    );
}

export default Login;