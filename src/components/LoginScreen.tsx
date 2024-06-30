import React, { useState } from 'react';
import '../styles/LoginScreen.css';

interface LoginScreenProps {
    setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

function LoginScreen({setLoggedIn}: LoginScreenProps) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        if (username === '' || password === '') {
            alert('Please fill in all fields');
            return;
        }

        if (username === 'Maureen' && password === 'letmein') {
            setLoggedIn(true);
            return;
        }

        if (username === 'Sot' && password === 'sidcypriotgod') {
            setLoggedIn(true);
            return;
        }

        if (username === 'Callum' && password === 'calwhiskyking') {
            setLoggedIn(true);
            return;
        }

        alert('Invalid username or password, please try again.')
    };

    return (
        <div className='login-screen-container'>
            <h2 className='login-title'>Login</h2>
            <form onSubmit={handleSubmit} className='login-form'>
                <div className='login-input'>
                    <label htmlFor="username"></label>
                    <input
                        type='text'
                        id='username'
                        placeholder='Username'
                        value={username}
                        onChange={handleUsernameChange}
                        className='login-input-text'
                    />
                </div>
                <div className='login-input'>
                    <label htmlFor="password"></label>
                    <input
                        type='password'
                        id='password'
                        placeholder='Password'
                        value={password}
                        onChange={handlePasswordChange}
                        className='login-input-text'
                    />
                </div>
                <div className='login-button-container'>
                    <button type="submit" className='login-button'>Enter</button>
                </div>
            </form>
        </div>
    );
}

export default LoginScreen;