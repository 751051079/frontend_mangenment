import React, { useState } from 'react';
import StarBackground from '@/component/LoginBackground/StarBackground';
import EaskeyInput from '@/component/Form/EaskeyInput';
import '@/assets/css/Login/index.css'

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [captchaInput, setCaptchaInput] = useState('');

    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleCaptchaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCaptchaInput(e.target.value);
    };

    const handleClickImgCaptchaChange = () => {
        // setCaptchaInput(e.target.value);
    };

    const handleLogin = () => {
        // 在这里处理登录逻辑，比如发送登录请求到服务器
        if (!username) {
            console.log(1)
        }
        // console.log('Username:', username);
        // console.log('Password:', password);
        // console.log('Captcha:', captchaInput);
    };


    return (
        <div className='login-page'>
            <div className='login-form'>
                <img src={require('../assets/image/portrait.png')} alt="" className='login-user-profile-picture' />
                <EaskeyInput style={{ marginTop: '60px' }} label='账号' type='text' value={username} onChange={handleUsernameChange} />
                <EaskeyInput style={{ marginTop: '15px' }} label='密码' type='password' value={password} onChange={handlePasswordChange} />
                <EaskeyInput style={{ marginTop: '15px' }} label='验证码' type='text' value={captchaInput} imgSrc={require('../assets/image/code.jpg')} onChange={handleCaptchaChange} onImgClick={handleClickImgCaptchaChange} />
                <div className='login-btn-box' onClick={handleLogin}>
                    <div className='login-btn-translation'>
                        <div className='login-btn-active'>登录</div>
                        <div className='login-btn-active-bg'></div>
                    </div>
                    <div className='login-btn'>登录</div>
                </div>
            </div>
            <StarBackground />
        </div>
    );
}

export default Login;