import { useState } from 'react'

const AuthPage = ({ mode, onModeChange, onBackToStore }) => {
  const isLogin = mode === 'login'
  const [formMessage, setFormMessage] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    setFormMessage(
      isLogin
        ? 'Welcome back. Connect this form to your authentication service to continue.'
        : 'Your account details are ready. Connect this form to your authentication service to finish signing up.',
    )
  }

  return (
    <main className="auth-page">
      <section className="auth-panel auth-panel-image" aria-label="StyleStreet fashion">
        <div className="auth-panel-overlay">
          <button className="auth-brand" type="button" onClick={onBackToStore}>
            <span className="brand-icon">S</span>
            Style<span>Street</span>
          </button>
          <div className="auth-quote">
            <p className="eyebrow">YOUR STYLE, YOUR STORY</p>
            <h1>Wear what<br /><em>moves you.</em></h1>
            <p>Discover considered pieces made for every version of you.</p>
          </div>
        </div>
      </section>

      <section className="auth-panel auth-panel-form">
        <div className="auth-form-wrap">
          <button className="auth-back-link" type="button" onClick={onBackToStore}>← Back to store</button>
          <p className="eyebrow">{isLogin ? 'WELCOME BACK' : 'JOIN THE COMMUNITY'}</p>
          <h2>{isLogin ? 'Sign in to your account' : 'Create your account'}</h2>
          <p className="auth-intro">
            {isLogin
              ? 'Save your favourites and pick up where you left off.'
              : 'Be the first to discover new drops, edits, and offers.'}
          </p>

          <form className="auth-form" onSubmit={handleSubmit}>
            {!isLogin && (
              <label>
                Full name
                <input type="text" name="name" placeholder="Your name" autoComplete="name" required />
              </label>
            )}
            <label>
              Email address
              <input type="email" name="email" placeholder="you@example.com" autoComplete="email" required />
            </label>
            <label>
              Password
              <input
                type="password"
                name="password"
                placeholder="At least 8 characters"
                autoComplete={isLogin ? 'current-password' : 'new-password'}
                minLength="8"
                required
              />
            </label>
            {!isLogin && (
              <label className="auth-checkbox">
                <input type="checkbox" required />
                <span>I agree to the terms and privacy policy.</span>
              </label>
            )}
            {isLogin && <button className="forgot-link" type="button">Forgot password?</button>}
            <button className="auth-submit" type="submit">{isLogin ? 'Sign in' : 'Create account'} <span>→</span></button>
          </form>

          {formMessage && <p className="auth-message" role="status">{formMessage}</p>}

          <p className="auth-switch">
            {isLogin ? 'New to StyleStreet?' : 'Already have an account?'}
            <button type="button" onClick={() => { setFormMessage(''); onModeChange(isLogin ? 'signup' : 'login') }}>
              {isLogin ? 'Create an account' : 'Sign in'}
            </button>
          </p>
        </div>
      </section>
    </main>
  )
}

export default AuthPage
