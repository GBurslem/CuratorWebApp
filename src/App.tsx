import './styles/App.css'
import LoginScreen from './components/LoginScreen'
import Stories from './components/Stories'
import { useState } from 'react'

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="app-container">
      {loggedIn ? (
        <Stories />
      ) : (
        <LoginScreen setLoggedIn={setLoggedIn} />
      )}
    </div>
  );
}

export default App;
