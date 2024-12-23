import { useState } from 'react'; 
import './ResetPassword.css'; // Add custom CSS for styling
import { useNavigate, Link } from 'react-router-dom';

export default function ResetPassword() {
  const navigate = useNavigate()
  const [token, setToken] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleResetPassword(e) {
    e.preventDefault()
    setLoading(true)
    setMessage('')
    setErrorMessage('')

    if (newPassword !== confirmPassword) {
      setErrorMessage("Passwords don't match!")
      setLoading(false)
      return
    }

    const payload = { token, newPassword, confirmPassword }

    try {
      const response = await fetch('https://password-reset-server-qaxv.onrender.com/resetpassword', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      const data = await response.json()

      if (response.ok) {
        setMessage(data.message) // Success message
        setTimeout(() => navigate('/'), 2000) // Redirect to login after 2 seconds
      } else {
        setErrorMessage(data.message) // Show error message
      }
    } catch (error) {
      console.error(error)
      setErrorMessage('An error occurred. Please try again later.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="reset-container">
      <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <div className="card p-4 shadow-lg" style={{ maxWidth: '400px', width: '100%', background: 'rgba(255, 255, 255, 0.8)' }}>
          <h2 className="text-center text-primary mb-4">Reset Your Password</h2>
          <form onSubmit={handleResetPassword}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Enter your reset token"
                required
                value={token}
                onChange={(e) => setToken(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="New Password"
                required
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Confirm New Password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary btn-block" disabled={loading}>
              {loading ? 'Resetting...' : 'Reset Password'}
            </button>
          </form>

          {message && <div className="alert alert-success mt-3">{message}</div>}
          {errorMessage && <div className="alert alert-danger mt-3">{errorMessage}</div>}

          <div className="mt-3 text-center">
            <p>Remembered your password? <Link to="/" className="text-primary">Login here</Link></p>
          </div>
        </div>
      </div>
    </div>
  )
}
