import React from 'react'
import Img1 from '../assets/Images/blue-button.svg'
import Img2 from '../assets/Images/Earning.svg'
import Img3 from '../assets/Images/Contacts.svg'
import Img4 from '../assets/Images/creditcard.svg'
import Img5 from '../assets/Images/wallet.svg'
import Img6 from '../assets/Images/blue-button.svg'

const InfoBox = () => {
  return (
    <section className="container">
        <div className="grid2-2">
          <div className="box-1">
            <h2>Make your money<br /> transfer simple and clear</h2>
            <ul>
              <li>
                <p><i className="fa-regular fa-circle-check checkboxcolor" ></i>Banking transactions are free for you</p>
              </li>
              <li>
                <p><i className="fa-regular fa-circle-check checkboxcolor" ></i> No monthly cash commission</p>
              </li>
              <li>
                <p><i className="fa-regular fa-circle-check checkboxcolor" ></i> Manage payments and transactions online</p>
              </li>
            </ul>
            <img className="btn-grid" src={Img1} alt="" />
          </div>
          <div>
            <img src={Img2} alt="" />
          </div>
          <div>
            <img src={Img3} alt="" />
          </div>
          <div className="box-2">
            <h2>Receive payment from international bank details</h2>
            <div className="flex">
              <div>
                <div className="icon-container">
                  <img src={Img4} alt="" />
                </div>
                <p>Manage your payments online. Mollis congue egestas egestas fermentum fames.</p>
              </div>
              <div>
               <div className="icon-container">
                 <img src={Img5} alt="" />
               </div>
               <p>A elementur and imperdiet enim, pretium etiam facilisi aenean quam mauris.</p>
              </div>
           </div>
            <img className="btn-grid" src={Img6} alt="" />
          </div>

        </div>

      </section>
  )
}

export default InfoBox