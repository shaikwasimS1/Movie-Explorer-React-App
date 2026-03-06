import banner1 from "../../../assets/movies/banner-1.avif"
import banner2 from "../../../assets/movies/banner-2.jpg"
import Button from "../../button/Button"
import "./Home.css"
import { FaApple } from "react-icons/fa6";
import { SiCrunchyroll } from "react-icons/si";
import { RiCompassDiscoverLine } from "react-icons/ri";
import { FaNapster } from "react-icons/fa";




const Home = () => {
  return (
    <>


      {/* Banner-1-hero-section */}

      <div className="banner1">
        <div className="container-wrapper">

          <div className="row">
            <div className="col-lg-4">
              <div className="row ">
                <div className="col-sm-12 ">
                  <h3 className="text-center mt-5 " >Welcome to Prime Video</h3>

                  <p className="container text-center mt-4 p-3">Join Prime to watch the latest movies, TV shows and award-winning Amazon Originals</p>
                  <div className="d-flex justify-content-center mb-5">
                    <Button variant="light" ishoverAnimation={true}>Sign in to Join Prim</Button>
                  </div>

                </div>
              </div>
            </div>
            <div className="col-lg-8 align-items-center">
              <img src={banner1} alt="banner" className="img-banner1 img-fluid" />
            </div>

          </div>

        </div>
      </div>


      {/* Banner-2-hero-section */}

      <div className="banner2 p-5">
        <div className="container-wrapper">

          <div className="row">
            <div className="col-lg-4">
              <div className="row ">
                <div className="col-sm-12 ">
                  <h3 className="text-lg-start text-center mt-5 " >Movie rentals on Prime Video</h3>

                  <p className="container text-lg-start text-center  mt-4 pb-3">Early Access to new movies, before digital subscription</p>
                  <div className="d-flex justify-content-lg-start justify-content-center mb-5 ">
                    <Button variant="light" ishoverAnimation={true}>Rating Movie</Button>
                  </div>

                </div>
              </div>
            </div>
            <div className="col-lg-8 align-items-center">
              <img src={banner2} alt="banner" className="img-banner1 img-fluid" />
            </div>
          </div>
        </div>
      </div>

      {/* Favourite-Section */}

      <div className="favorite">
        <div className="favorite-wrapper">
          <div className="row align-items-center">

            <div className="col-lg-6 my-5" >
              <h2>Your favorite subscriptions all in one place</h2>
              <p className="text-sm-start text-center ">
                Customers can subscribe to get access to a variety of premium and specialty
                content, easily accessible within the Prime Video app
              </p>
            </div>

            <div className="col-lg-6">

              <div className="row row-cols-lg-3 row-cols-md-2 row-cols-2 g-3 my-5">

                <div className="col">
                  <div className="boxs d-flex align-items-center justify-content-center">
                    <FaApple className="apple-icon" />
                    <h4 className="ms-2">tv+</h4>
                  </div>
                </div>

                <div className="col">
                  <div className="boxs d-flex align-items-center justify-content-center">
                    <SiCrunchyroll className="apple-icon" />
                    <h4 className="ms-2">Crunchyroll</h4>
                  </div>
                </div>

                <div className="col">
                  <div className="boxs text-center">
                    <h4 className="pt-3">LIONSGATE</h4>
                    <p>play</p>
                  </div>
                </div>

                <div className="col">
                  <div className="boxs d-flex align-items-center justify-content-center">
                    <RiCompassDiscoverLine className="apple-icon" />
                    <h4 className="ms-2">discovery+</h4>
                  </div>
                </div>

                <div className="col">
                  <div className="boxs d-flex align-items-center justify-content-center">
                    <h4>Anime Times</h4>
                  </div>
                </div>

                <div className="col">
                  <div className="boxs d-flex align-items-center justify-content-center">
                    <h4>manorama</h4>
                  </div>
                </div>

                <div className="col">
                  <div className="boxs d-flex align-items-center justify-content-center">
                    <h4>CHAUPAL</h4>
                  </div>
                </div>

                <div className="col">
                  <div className="boxs d-flex align-items-center justify-content-center">
                    <h4>BBC</h4>
                  </div>
                </div>

                <div className="col">
                  <div className="boxs d-flex align-items-center justify-content-center">
                    <FaNapster className="apple-icon" />
                    <h4 className="ms-2">FANCODE</h4>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>


      {/* Fotter-Home-Page */}

      <div className="footer">
        <h4>Prime Video</h4>
        <p>
          <a href="#" className="me-5">Terms and Privacy Notice</a>
          <a href="#" className="me-5">Send us feedback</a>
          <a href="#">Help</a>
        </p>
        <p className="copyright">© 1996-2026, Amazon.com, Inc. or its affiliates</p>
      </div>


    </>

  )
}

export default Home



