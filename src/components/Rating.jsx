import React from 'react'
import Quotes from '../assets/Images/quotes.svg'
import Fannyrating from '../assets/Images/Fannyrating.svg'
import Fanny from '../assets/Images/Fannie.svg'
import Quotes2 from '../assets/Images/quotes.svg'
import Albertrating from '../assets/Images/Albertrating.svg'
import Albert from '../assets/Images/Albert.svg'

const Rating = () => {
  return (
    <section className="rating-container">
      <div className="container">
        <div className="flex">
          <div>
            <h2>Clients are Loving Our App</h2>
          </div>
            <div className="box-1">
              <img className="quotes" src={Quotes} alt="" />
              <img className="stars" src={Fannyrating} alt="" />
              <p>Sit pretium aliquam tempor, orci dolor sed maecenas rutrum sagittis. Laoreet posuere rhoncus, egestas lacus, egestas justo aliquam vel. Nisi vitae lectus hac hendrerit. Montes justo turpis sit amet.</p>
              <img className="avatar" src={Fanny} alt="" />
            </div>
            <div className="box-2">
              <img className="quotes" src={Quotes2} alt="" />
              <img className="stars" src={Albertrating} alt="" />
              <p>Nunc senectus leo vel venenatis accumsan vestibulum sollicitudin amet porttitor. Nisl bibendum nulla tincidunt eu enim ornare dictumst sit amet. Dictum pretium dolor tincidunt egestas eget nunc.</p>
              <img className="avatar" src={Albert} alt="" />
            </div>
          </div>
        </div>



      </section>
  )
}

export default Rating