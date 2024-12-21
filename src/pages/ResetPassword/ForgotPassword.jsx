import { useState } from 'react';
import './ResetPassword.css'; // Add custom CSS for styling
import { Link } from 'react-router-dom';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleForgotPassword(e) {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    setErrorMessage('');

    const payload = { email };

    try {
      const response = await fetch('http://localhost:3000/forgotpassword', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message); // Success message
      } else {
        setErrorMessage(data.message); // Show error message
      }
    } catch (error) {
      console.error(error);
      setErrorMessage('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="reset-container">
      <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <div className="card p-4 shadow-lg" style={{ maxWidth: '400px', width: '100%', background: 'rgba(255, 255, 255, 0.8)' }}>
          <h2 className="text-center text-primary mb-4">Forgot Password</h2>
          <form onSubmit={handleForgotPassword}>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary btn-block" disabled={loading}>
              {loading ? 'Sending...' : 'Send Reset Link'}
            </button>
          </form>

          {message && <div className="alert alert-success mt-3">{message}</div>}
          {errorMessage && <div className="alert alert-danger mt-3">{errorMessage}</div>}

          <div className="mt-3 text-center">
            <p>Remembered your password? <Link to="/" className="text-primary">Login here</Link></p>
            <p>Don&#39;t have an account? <Link to="/signup" className="text-primary">Sign Up here</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
}
