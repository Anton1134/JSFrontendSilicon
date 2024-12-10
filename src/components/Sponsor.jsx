import React from 'react'
import Logo1 from '../assets/Images/Ogo.svg'
import Logo2 from '../assets/Images/Logoupsum1.svg'
import Logo3 from '../assets/Images/Logoipsum2.svg'
import Logo4 from '../assets/Images/Logoipsum3.svg'
import Logo5 from '../assets/Images/Logoipsum4.svg'
import Logo6 from '../assets/Images/Logoipsum5.svg'

const Sponsor = () => {
  return (
    <section id="sponsor">
        <div class="container">
          <div class="sponsor-box">
            <img src={Logo1} alt="" />
          </div>
          <div class="sponsor-box">
            <img src={Logo2} alt="" />
          </div>
          <div class="sponsor-box">
            <img src={Logo3} alt="" />
          </div>
          <div class="sponsor-box">
            <img src={Logo4} alt="" />
          </div>
          <div class="sponsor-box">
            <img src={Logo5} alt="" />
          </div>
          <div id="brand-6" class="sponsor-box">
            <img src={Logo6} alt="" />
          </div>
        </div>
      </section>
  )
}

export default Sponsor