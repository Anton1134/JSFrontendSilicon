import React from 'react'
import Notification from '../assets/Images/notification.svg'


const Subscribe = () => {
  return (
    <section className="subscribe">
        <div className="container">
          <img src={Notification} alt="" />
          <h2>Subscribe to our newsletter to stay informed about latest updates</h2>
          <div className="subscribe-group">
            <input className="subscribe-form email" type="email" placeholder="Your Email" />
            <button className="btns">Subscribe</button>
          </div>
        </div>
      </section>
  )
}

export default Subscribe