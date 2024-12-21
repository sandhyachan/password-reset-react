import { Link } from 'react-router-dom';
import './Signup.css';
import Navbar from '../../components/Navbar';
import { useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';

function Signup() {
  const emailRef = useRef(null);
  const passRef = useRef(null);
  const confirmPassRef = useRef(null);
  const nameRef = useRef(null);
  const phoneNumberRef = useRef(null); // Reference for phone number
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // This function will handle form submission
  async function handleSignUp(e) {
    e.preventDefault();  // Prevent default form submission

    const fullName = nameRef.current.value;
    const email = emailRef.current.value;
    const phoneNumber = phoneNumberRef.current.value;  // Get phone number
    const password = passRef.current.value;
    const confirmPassword = confirmPassRef.current.value;

    // Validate all required fields
    if (!fullName || !email || !password || !confirmPassword || !phoneNumber) {
      setErrorMessage("All fields are required.");
      return;
    }

    // Validate password confirmation
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    // Check password length (optional, but generally a good practice)
    if (password.length < 6) {
      setErrorMessage("Password must be at least 6 characters.");
      return;
    }

    // Prepare the payload to send to the server
    const payload = {
      fullName,
      email,
      phoneNumber,  // Include phone number in the payload
      password,
    };

    setLoading(true);
    setErrorMessage(""); // Clear any previous error message

    try {
      const response = await fetch("http://localhost:3000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        // Navigate to login or home page after successful signup
        setTimeout(() => navigate('/'), 2000);
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message || "Signup failed. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setErrorMessage("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div className="container-fluid">
        <Navbar />
        <div className="container" style={{ minHeight: '100vh' }}>
          <div className="row justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
            {/* Signup Section */}
            <div className="col-md-6 d-flex align-items-center justify-content-center" style={{ zIndex: 1 }}>
              <div className="card" style={{ width: '100%', maxWidth: '480px', maxHeight: '650px', overflowY: 'auto' }}>
                <div className="card-body">
                  <h2 className="text-center mb-4">Create an Account</h2>
                  <p className="text-muted text-center">Join us at Elysian Shores and enjoy a luxury experience like no other.</p>

                  {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}

                  <form onSubmit={handleSignUp}> {/* Use onSubmit instead of onClick */}
                    {/* Full Name Input */}
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="fullname"
                        placeholder="Full Name"
                        required
                        ref={nameRef}
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
                        ref={emailRef}
                      />
                    </div>

                    {/* Phone Number Input */}
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="phoneNumber"
                        placeholder="Phone Number"
                        required
                        ref={phoneNumberRef}  
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
                        ref={passRef}
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
                        ref={confirmPassRef}
                      />
                    </div>

                    <div className="form-group text-center">
                      <button
                        type="submit" // Use submit instead of onClick for the button
                        className="btn btn-primary w-100"
                        disabled={loading}
                      >
                        {loading ? "Signing Up..." : "Sign Up"}
                      </button>
                    </div>

                    <div className="form-group text-center">
                      <p className="text-muted">
                        Already have an account? <Link to="/" className="text-primary">Login</Link>
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
