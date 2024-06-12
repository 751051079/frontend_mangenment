import React, { useState, useEffect } from 'react';
import StarBackground from '@/component/LoginBackground/StarBackground';
import EaskeyInput from '@/component/Form/EaskeyInput';
import '@/assets/css/Login/index.css'
import { getCaptcha, login } from '@/api/login'
import Message, { MessagesProps } from '@/component/Message/Message';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [captchaInput, setCaptchaInput] = useState('');
    const [captchaImages, setCaptchaImages] = useState('');
    const [nextId, setNextId] = useState(0);
    const [messages, setMessages] = useState<MessagesProps[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        // 在组件加载时调用 getCaptcha
        const fetchData = async () => {
            try {
                const captchaData: any = await getCaptcha();
                const url = URL.createObjectURL(captchaData);
                setCaptchaImages(url)
                console.log(url); // 处理获取到的数据
            } catch (error) {
                console.error('Error fetching captcha:', error);
            }
        };

        fetchData(); // 调用异步函数
    }, []);

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
        const fetchData = async () => {
            try {
                const captchaData: any = await getCaptcha();
                const url = URL.createObjectURL(captchaData);
                setCaptchaImages(url)
                console.log(url); // 处理获取到的数据
            } catch (error) {
                console.error('Error fetching captcha:', error);
            }
        };

        fetchData(); // 调用异步函数
    };

    const handleLogin = () => {
        // 在这里处理登录逻辑，比如发送登录请求到服务器
        if (!username) {
            console.log(1)
        }
        login({
            username: username,
            password: password,
            captcha: captchaInput
        }).then((res: any) => {
            if (res.code === 1) {
                navigate('/layout');
                localStorage.setItem('token', res.data);
                handleAddMessage('登陆成功！','success')
            }
            else {
                handleAddMessage(res.msg,'danger')
            }

        })
        // console.log('Username:', username);
        // console.log('Password:', password);
        // console.log('Captcha:', captchaInput);
    };

    const handleAddMessage = (text: string, type: 'success' | 'danger' | 'warning' | 'info') => {
        const newMessage = { id: nextId, text, type };
        setMessages((prevMessages) => [...prevMessages, newMessage]);
        setNextId((prevId) => prevId + 1);
    };

    const handleCloseMessage = (id: number) => {
        setMessages((prevMessages) => prevMessages.filter((message) => message.id !== id));
    };


    return (
        <div className='login-page'>
            <div className='login-form'>
                <img src={require('../assets/image/portrait.png')} alt="" className='login-user-profile-picture' />
                <EaskeyInput style={{ marginTop: '60px' }} label='账号' type='text' value={username} onChange={handleUsernameChange} />
                <EaskeyInput style={{ marginTop: '15px' }} label='密码' type='password' value={password} onChange={handlePasswordChange} />
                <EaskeyInput style={{ marginTop: '15px' }} label='验证码' type='text' value={captchaInput} imgSrc={captchaImages} onChange={handleCaptchaChange} onImgClick={handleClickImgCaptchaChange} />
                <div className='login-btn-box' onClick={handleLogin}>
                    <div className='login-btn-translation'>
                        <div className='login-btn-active'>登录</div>
                        <div className='login-btn-active-bg'></div>
                    </div>
                    <div className='login-btn'>登录</div>
                </div>
            </div>
            <StarBackground />
            {messages && <Message message={messages} onClose={handleCloseMessage} />}
        </div>
    );
}

export default Login;