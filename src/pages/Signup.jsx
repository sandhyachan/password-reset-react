import { Link } from 'react-router-dom';
import './Signup.css';
import Navbar from './components/Navbar';

function Signup() {
  return (
    <>
      <div className="container-fluid">
        <Navbar/>
        <div className="container" style={{ minHeight: '100vh' }}>
          <div className="row justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
            {/* Signup Section */}
            <div className="col-md-6 d-flex align-items-center justify-content-center" style={{ zIndex: 1 }}>
              <div className="card" style={{ width: '100%', maxWidth: '480px', maxHeight: '650px', overflowY: 'auto' }}>
                <div className="card-body">
                  <h2 className="text-center mb-4">Create an Account</h2>
                  <p className="text-muted text-center">Join us at Elysian Shores and enjoy a luxury experience like no other.</p>

                  <form>
                    {/* Full Name Input */}
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="fullname"
                        placeholder="Full Name"
                        required
                      />
                    </div>

                    {/* Email Input */}
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Email Address"
                        required
                      />
                    </div>

                    {/* Username Input */}
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="username"
                        placeholder="Username"
                        required
                      />
                    </div>

                    {/* Password Input */}
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control"
                        name="password"
                        placeholder="Password"
                        required
                      />
                    </div>

                    {/* Confirm Password Input */}
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control"
                        name="confirm-password"
                        placeholder="Confirm Password"
                        required
                      />
                    </div>

                    <div className="form-group text-center">
                      <button type="submit" className="btn btn-primary w-100">Sign Up</button>
                    </div>
                    <div className="form-group text-center">
                      <p className="text-muted">
                        Already have an account? <Link to="/login" className="text-primary">Login</Link>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
