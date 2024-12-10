import React from 'react'
import Feature1 from '../assets/Images/Iphone-sided.svg'
import Feature2 from '../assets/Images/smile.svg'
import Feature3 from '../assets/Images/creditcard.svg'
import Feature4 from '../assets/Images/shield.svg'
import Feature5 from '../assets/Images/budget.svg'
import Feature6 from '../assets/Images/support.svg'
import Feature7 from '../assets/Images/wallet.svg'

const Features = () => {
  return (
    <section className="features">
        <div className="container">
          <div className="phone">
            <img src={Feature1} alt="" />
          </div>
          <div className="text">
            <h2>App Features</h2>
            <p id="padding-top-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.</p>
            <div className="features-grid">

              <div className="feature-card">
                <div className="icon-container">
                  <img src={Feature2} alt="" />
                </div>
                <div>
                  <h3>Easy Payments</h3>
                  <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo. </p>
                </div>
              </div>
              <div className="feature-card">
                <div className="icon-container">
                  <img src={Feature3} alt="" />
                </div>
                <div>
                  <h3>Data Security</h3>
                  <p>Augue pulvinar justo, fermentum fames aliquam accumsan vestibulum non.</p>
                </div>
              </div>
              <div className="feature-card">
                <div className="icon-container">
                  <img src={Feature4} alt="" />
                </div>
                <div>
                  <h3>Cost Statistics</h3>
                  <p>Mattis urna ultricies non amet, purus in auctor non. Odio vulputate ac nibh.</p>
                </div>
              </div>
              <div className="feature-card">
                <div className="icon-container">
                  <img src={Feature5} alt="" />
                </div>
                <div>
                  <h3>Support 24/7</h3>
                  <p>A elementum, imperdiet enim, pretium etiam facilisi in aenean quam mauris.</p>
                </div>
              </div>
              <div className="feature-card">
                <div className="icon-container">
                  <img src={Feature6} alt="" />
                </div>
                <div>
                  <h3>Regular Cashback</h3>
                  <p>Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet eleifend.</p>
                </div>
              </div>
              <div className="feature-card">
                <div className="icon-container">
                  <img src={Feature7} alt="" />
                </div>
                <div>
                  <h3>Top Standards</h3>
                  <p>Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus id. Sit facilisis dolor arcu.</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
  )
}

export default Features