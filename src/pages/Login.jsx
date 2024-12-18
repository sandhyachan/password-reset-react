import { Link } from 'react-router-dom'
import './Login.css'

function Login () {
    return <>
    <div className="container-fluid" style={{ background: "url('https://img.freepik.com/free-photo/marbled-blue-abstract-background-liquid-marble-pattern_1258-99516.jpg?t=st=1734417670~exp=1734421270~hmac=7410bd8c9192764f1838f0ad035d8bcd28bab685c44aa55e20406e0ed6687005&w=1380')", backgroundSize: 'cover', minHeight: '100vh' }}>
      <div className="row">
        {/* Navbar Section */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-transparent w-100">
          <div className="container">
            <a className="navbar-brand" href="#">Elysian Shores</a>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
                <li className="nav-item"><a className="nav-link" href="#">About Us</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Accommodations</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Experiences</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Dining</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Gallery</a></li>
                <li className="nav-item"><a className="nav-link" href="#">FAQs</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Contact Us</a></li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Carousel Section */}
        <div className="col-md-3 carousel-container">
          <div id="carouselExampleAutoplay" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="d-block w-100" src="https://z.cdrst.com/foto/hotel-sf/5088/granderesp/blue-marine-resort-spa-servicios-124a3e47.jpg?w=1200&h=-1&s=1" alt="Celebrate in Paradise" />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Celebrate in Paradise</h5>
                </div>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src="https://media.cntraveller.com/photos/665f19fa1ce4286a15ed49a6/16:9/w_2560,c_limit/SantaMarina-mykonos-june4-pr-global5.jpg" alt="Exclusive, oceanfront villas" />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Exclusive, Oceanfront Villas</h5>
                </div>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/3a/73/cd/indoor-outdoor-hydrotherapy.jpg?w=1200&h=-1&s=1" alt="Relax in Style" />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Relax in Style</h5>
                </div>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/465607136.jpg?k=348c58b94a0a5f6b2ca66874db9e62ee0e965758e5038fe1af6f82932a8ded24&o=&hp=1" alt="Rejuvenate Your Mind & Body" />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Rejuvenate Your Mind & Body</h5>
                </div>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src="https://symphony.cdn.tambourine.com/o2-beach-club-spa-redesign/media/13-o2beachclubbarbados-luxutycolection-quad-images-luxurycollectionoceanfrontqueen-622f4b2a5bbfd.jpg" alt="Escape to Paradise" />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Escape to Paradise</h5>
                </div>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src="https://maldives-paradise.com/wp-content/uploads/2020/11/maldives-finolhu-fish-crab-shack-restaurant-beach-678x381.jpg" alt="Savor the Flavors" />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Savor the Flavors</h5>
                </div>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src="https://www.dotwnews.com/modules/image_resize/image_resize.php?image=/uploads/posts/99865.jpg&width=860&height=468&cropratio=860:468" alt="Adventure Awaits" />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Adventure Awaits</h5>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplay" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplay" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        {/* Login Section */}
        <div className="col-md-6 offset-md-3 d-flex align-items-center justify-content-center order-2" style={{ height: '80vh' }}>
          <div className="card" style={{ width: '100%', maxWidth: '400px' }}>
            <div className="card-body">
              <form>
                <h2 className="text-center">Login</h2>
                <p className="text-muted text-center">Please enter your login and password!</p>

                <div className="form-group">
                  <input type="text" className="form-control" name="username" placeholder="Username" required />
                </div>

                <div className="form-group">
                  <input type="password" className="form-control" name="password" placeholder="Password" required />
                </div>

                <div className="form-group text-right">
                  <Link to="/resetpassword" className="text-muted">Forgot password?</Link>
                </div>

                <button type="submit" className="btn btn-primary w-100">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
}

export default Login