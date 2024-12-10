import React from 'react'
import faq1 from '../assets/Images/telefon.svg'
import faq2 from '../assets/Images/talkbubble.svg'
import Arrow1 from '../assets/Images/whitearrow.svg'
import Arrow2 from '../assets/Images/bluearrow.svg'

const Faq = () => {
  return (
    <section className="faq">
        <div className="container grid">
          <div>
            <h2>Any questions?<br /> Check out the FAQs</h2>
            <p>Still have unanswered questions and need to get <br /> in touch?</p>
          
            <div className="flex-container">
              <div className="blue-theme">
                <img src={faq1} alt="" />
                <span>Still have questions?</span>
                <p>Contact us <i className="fa-solid fa-arrow-right"></i> </p>
              </div>
              <div className="green-theme">
                <img src={faq2} alt="" />
                <span>Don't like phone calls?</span>
                <p>Contact us <i className="fa-solid fa-arrow-right"></i></p>
              </div>
            </div>
          </div>
          
          <div className="accordian">
            <div className="panel">
              <img src={Arrow1} alt="" />
              <span>Is any of my personal information stored in the App?</span>
            </div>
            <div className="panel">
              <img src={Arrow1} alt="" />
              <span>What formats can I download my transaction history in?</span>
            </div>
            <div className="panel">
              <img className="bluearrow" src={Arrow2} alt="" />
              <span>Can I schedule future transfers?</span>
              <p>Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.</p>
            </div>
            <div className="panel">
              <img src={Arrow1} alt="" />
              <span>When can I use Banking App services?</span>
            </div>
            <div className="panel">
              <img src={Arrow1} alt="" />
              <span>Can I create my own password that is easy for me to remember?</span>
            </div>
            <div className="panel">
              <img src={Arrow1} alt="" />
              <span>What happens if I forget or lose my password?</span>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Faq