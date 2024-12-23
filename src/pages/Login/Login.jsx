import { Link } from 'react-router-dom'
import './Login.css'
import { useRef, useState } from 'react'
import Navbar from '../../components/Navbar'
import Carousel from '../../components/Carousel'
import { useNavigate } from 'react-router-dom';

function Login() {
  const emailRef = useRef(null)
  const passRef = useRef(null)
  const navigate = useNavigate()
  
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  async function handleLogin(e) {
    e.preventDefault()
    
    const payload = {
      email: emailRef.current.value,
      password: passRef.current.value
    }

    if (!payload.email || !payload.password) {
      setErrorMessage("Please enter both email and password.")
      return
    }

    setLoading(true)
    setErrorMessage("") // Clear previous error message

    try {
      const response = await fetch("https://password-reset-server-qaxv.onrender.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      })

      if (response.ok) {
        // On successful response, return to home
        setTimeout(() => {
          navigate('/home')
        }, 2000)
      } else {
        // Handle incorrect login
        setErrorMessage("Invalid credentials. Please try again.")
      }
    } catch (err) {
      console.error(err)
      setErrorMessage("An error occurred. Please try again later.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container-fluid" style={{ background: "url('https://img.freepik.com/free-photo/marbled-blue-abstract-background-liquid-marble-pattern_1258-99516.jpg?t=st=1734417670~exp=1734421270~hmac=7410bd8c9192764f1838f0ad035d8bcd28bab685c44aa55e20406e0ed6687005&w=1380')", backgroundSize: 'cover', minHeight: '100vh' }}>
      <div className="row">
        
        <Navbar />
        <Carousel />

        {/* Login Section */}
        <div className="col-md-6 offset-md-3 d-flex align-items-center justify-content-center order-2" style={{ height: '80vh' }}>
          <div className="card" style={{ width: '100%', maxWidth: '400px' }}>
            <div className="card-body">
              <form>
                <h2 className="text-center">Login</h2>
                <p className="text-muted text-center">Please enter your login and password!</p>

                {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}

                <div className="form-group">
                  <input 
                    type="text" 
                    className="form-control" 
                    name="username" 
                    placeholder="Email" 
                    required 
                    ref={emailRef} 
                  />
                </div>

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

                <div className="form-group text-right">
                  <Link to="/forgotpassword" className="text-muted">Forgot password?</Link>
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary w-100" 
                  onClick={handleLogin} 
                  disabled={loading}
                >
                  {loading ? "Logging in..." : "Login"}
                </button>

                <div className="form-group text-center mt-3">
                  <p className="text-muted">Don&#39;t have an account? <Link to="/signup" className="btn btn-link">Sign Up</Link></p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
