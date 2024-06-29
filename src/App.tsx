import './styles/App.css'
import LoginScreen from './components/LoginScreen'
import Stories from './components/Stories'
import { useState } from 'react'

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="app-container">
      <h1 className='header'></h1>
      <div className='main'>
        {loggedIn ? (
          <Stories />
        ) : (
          <LoginScreen setLoggedIn={setLoggedIn} />
        )}
      </div>
    </div>
  );
}

export default App;
