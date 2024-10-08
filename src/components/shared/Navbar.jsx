
const Navbar = () => {
  return (
    <div className="carousel w-full lg:h-72">
      <div id="slide1" className="carousel-item relative w-full">
        
        <div className="hero" style={{ backgroundImage: 'url("/images/banner-one.jpg")' }}>
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-neutral-content text-center py-20">
            <div className="max-w-md">
              <h2 className="mb-5 text-3xl font-bold">Our Courses</h2>
              <p className="mb-5 text-center text-xl">
              Complete ReactJS, Javascript Pro, Web Design & Development, Digital Marketing, CCNA and Networking, Graphics Design
              </p>
            </div>
          </div>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" className="btn btn-circle">❮</a>
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div>

      <div id="slide2" className="carousel-item relative w-full">
      <div className="hero" style={{ backgroundImage: 'url("/images/banner-two.jpg")' }}>
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-neutral-content text-center py-20">
            <div className="max-w-md">
              <h2 className="mb-5 text-3xl font-bold">Our Courses</h2>
              <p className="mb-5 text-center text-xl">
              Complete ReactJS, Javascript Pro, Web Design & Development, Digital Marketing, CCNA and Networking, Graphics Design
              </p>
            </div>
          </div>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle">❮</a>
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div>

      <div id="slide3" className="carousel-item relative w-full">
      <div className="hero" style={{ backgroundImage: 'url("/images/banner-three.jpg")' }}>
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-neutral-content text-center py-20">
            <div className="max-w-md">
              <h2 className="mb-5 text-3xl font-bold">Our Courses</h2>
              <p className="mb-5 text-center text-xl">
              Complete ReactJS, Javascript Pro, Web Design & Development, Digital Marketing, CCNA and Networking, Graphics Design
              </p>
            </div>
          </div>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle">❮</a>
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
