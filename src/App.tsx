import './styles/App.css';
import LoginScreen from './components/LoginScreen';
import Stories from './components/Stories';
import WelcomeScreen from './components/WelcomeScreen';
import { useState } from 'react';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);

  const handleWelcomeComplete = () => {
    setShowWelcome(false);
  };

  return (
    <div className="app-container">
      {!loggedIn ? (
        <LoginScreen setLoggedIn={setLoggedIn} />
      ) : (
        showWelcome ? (
          <WelcomeScreen onComplete={handleWelcomeComplete} />
        ) : (
          <Stories />
        )
      )}
    </div>
  );
}

export default App;