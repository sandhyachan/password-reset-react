import Navbar from '../../components/Navbar' 
import Carousel from '../../components/Carousel'  
import './Home.css'  

function Home () {
  return (
    <div>
      <Navbar />
      <Carousel />

      {/* About Section */}
      <section className="about">
        <div className="container">
          <h2>Experience Luxury Like Never Before</h2>
          <div className="row">
            <div className="col-md-4">
              <img
                src="https://z.cdrst.com/foto/hotel-sf/5088/granderesp/blue-marine-resort-spa-servicios-124a3e47.jpg?w=1200&h=-1&s=1"
                alt="Exclusive Oceanfront Villas"
                className="img-fluid"
              />
              <h3>Exclusive Oceanfront Villas</h3>
              <p>Enjoy breathtaking views right from your villa, with private access to the beach.</p>
            </div>
            <div className="col-md-4">
              <img
                src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/3a/73/cd/indoor-outdoor-hydrotherapy.jpg?w=1200&h=-1&s=1"
                alt="Relaxation"
                className="img-fluid"
              />
              <h3>Relax in Style</h3>
              <p>Indulge in world-class hydrotherapy, combining tranquility and rejuvenation.</p>
            </div>
            <div className="col-md-4">
              <img
                src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/465607136.jpg?k=348c58b94a0a5f6b2ca66874db9e62ee0e965758e5038fe1af6f82932a8ded24&o=&hp=1"
                alt="Rejuvenate Your Mind & Body"
                className="img-fluid"
              />
              <h3>Rejuvenate Your Mind & Body</h3>
              <p>Relax and rejuvenate at our luxurious spa and wellness center.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Experiences */}
      <section className="experiences">
        <div className="container">
          <h2>Unforgettable Experiences</h2>
          <div className="row">
            <div className="col-md-4">
              <img
                src="https://symphony.cdn.tambourine.com/o2-beach-club-spa-redesign/media/13-o2beachclubbarbados-luxutycolection-quad-images-luxurycollectionoceanfrontqueen-622f4b2a5bbfd.jpg"
                alt="Escape to Paradise"
                className="img-fluid"
              />
              <h3>Escape to Paradise</h3>
              <p>Enjoy a tropical paradise where every moment feels like a dream come true.</p>
            </div>
            <div className="col-md-4">
              <img
                src="https://maldives-paradise.com/wp-content/uploads/2020/11/maldives-finolhu-fish-crab-shack-restaurant-beach-678x381.jpg"
                alt="Savor the Flavors"
                className="img-fluid"
              />
              <h3>Savor the Flavors</h3>
              <p>Delight your taste buds with exquisite cuisine from our world-class chefs.</p>
            </div>
            <div className="col-md-4">
              <img
                src="https://www.dotwnews.com/modules/image_resize/image_resize.php?image=/uploads/posts/99865.jpg&width=860&height=468&cropratio=860:468"
                alt="Adventure Awaits"
                className="img-fluid"
              />
              <h3>Adventure Awaits</h3>
              <p>Experience thrilling adventures including water sports, hiking, and more.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="container">
          <h2>What Our Guests Are Saying</h2>
          <div className="row">
            <div className="col-md-4">
              <blockquote>
                &#34; The best vacation we’ve ever had! The villa was incredible, and the staff was so friendly.&#34; 
                <footer>- Jane Doe</footer>
              </blockquote>
            </div>
            <div className="col-md-4">
              <blockquote>
              &#34; An unforgettable experience! Highly recommend the spa and beachfront dining.&#34; 
                <footer>- John Smith</footer>
              </blockquote>
            </div>
            <div className="col-md-4">
              <blockquote>
                &#34; Perfect place for a relaxing getaway. We’ll definitely be coming back.&#34; 
                <footer>- Sarah Lee</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="container text-center">
          <p>&copy  2024 Elysian Shores. All Rights Reserved.</p>
          <div className="social-icons">
            <a href="#" className="social-icon">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="bi bi-twitter"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  ) 
} 

export default Home 
