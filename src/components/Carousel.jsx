import React from 'react'
import IphoneLeft from '../assets/Images/iPhone-left.svg'
import IphoneMiddle from '../assets/Images/iPhone-middle.svg'
import IphoneRight from '../assets/Images/iPhone-right.svg'

const Carousel = () => {
  return (
    <section className="carousel">
        <div className="container space">
          <h2>How does It Work?</h2>

          <div className="phones">
            <div>
              <img src={IphoneLeft} alt="" />
            </div>
            <div>
              <img src={IphoneMiddle} alt="" />
            </div>
            <div>
              <img src={IphoneRight} alt="" />
            </div>
          </div>

          <div className="text">
            <h3>Latest transaction history</h3>
            <p>Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. Arcu sociis tristique quisque hac in consectetur condimentum.</p>
          </div>
        </div>
      </section>
  )
}

export default Carousel