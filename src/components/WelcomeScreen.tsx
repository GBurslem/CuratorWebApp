import React, { useEffect } from 'react';
import '../styles/WelcomeScreen.css';

interface WelcomeScreenProps {
    onComplete: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onComplete }) => {

    useEffect(() => {
        const timer = setTimeout(() => {
            onComplete();
        }, 6500); // Transition to the login screen after 9 seconds

        return () => {
            clearTimeout(timer);
        };
    }, [onComplete]);

    return (
        <div className='welcome-screen-container'>
            <h1 className='welcome-screen-title fadeInOut'>Welcome to Curator</h1>
        </div>
    );
};

export default WelcomeScreen;