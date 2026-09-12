import './App.css'
import { useState } from 'react'
import AuthPage from './ShoppingFolder/pages/AuthPage'
import MainPage from './ShoppingFolder/pages/MainPage'

function App() {
  const [authMode, setAuthMode] = useState(null)

  return (
    <div>
      {authMode ? (
        <AuthPage
          mode={authMode}
          onModeChange={setAuthMode}
          onBackToStore={() => setAuthMode(null)}
        />
      ) : (
        <MainPage onAccountClick={() => setAuthMode('login')} />
      )}
    </div>
  )
}

export default App