export default function Carousel () {
    return <>
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
    </>
}