import React from 'react'
import Appstore from '../assets/Images/appstore.svg'
import Googleplay from '../assets/Images/googleplay.svg'
import IphoneRight from '../assets/Images/iPhoneright.svg'
import IphoneLeft from '../assets/Images/Iphoneleft.svg'
import Discover from '../assets/Images/discovermorebtn.svg'

const Hero = () => {
  return (
    <section id="hero">
        <div className="container">
          <div className="manage">
            <h1>Manage All Your Money in One App</h1>
          </div>

          <div className="iphones">
            <p>We offer you a new generation of the mobile banking.<br /> Save, spend & manage money in your pocket.</p>
            <div className="mobile-buttons">
              <a className="btn-download-app" href="#"><img src={Appstore} alt="appstore" /></a>
              <a className="btn-download-app" href="#"><img src={Googleplay} alt="googleplay" /></a>
            </div>
            <a href="#" className="discover-more">
              <span className="btn-circle">
                <img src={Discover} alt="" />
              </span>
              <span>Discover more</span>
            </a>
          </div>

          <div className="images">
            <img className="img-back" src={IphoneLeft} alt="Iphoneleft" />
            <img className="img-front" src={IphoneRight} alt="Iphoneright" />
          </div>
        </div>
      </section>
  )
}

export default Hero