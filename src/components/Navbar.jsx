export default function Navbar() {
    return <>
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
    </>
}