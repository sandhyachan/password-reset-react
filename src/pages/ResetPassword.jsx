import { Link } from 'react-router-dom';
import './ResetPassword.css'; 

export default function ResetPassword() {
  return (
    <div className="reset-container">
      <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <div className="card p-4 shadow-lg" style={{ maxWidth: '400px', width: '100%', background: 'rgba(255, 255, 255, 0.8)' }}>
          <h2 className="text-center text-primary mb-4">Reset Your Password</h2>
          <form action="#" method="post">
            <div className="form-group">
              <input type="email" className="form-control" placeholder="Enter your email" required />
            </div>
            <div className="form-group">
              <input type="password" className="form-control" placeholder="New Password" required />
            </div>
            <div className="form-group">
              <input type="password" className="form-control" placeholder="Confirm New Password" required />
            </div>
            <button type="submit" className="btn btn-primary btn-block">Reset Password</button>
          </form>
          <div className="mt-3 text-center">
            <p>Remembered your password? <Link to="/login" className="text-primary">Login here</Link></p>
            <p>Don&#39;t have an account? <Link to="/signup" className="text-primary">Sign Up here</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
}
