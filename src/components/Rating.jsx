import React, { useEffect, useState } from 'react'
import Quotes from '../assets/Images/quotes.svg'
import Fannyrating from '../assets/Images/Fannyrating.svg'
import Fanny from '../assets/Images/Fannie.svg'
import Quotes2 from '../assets/Images/quotes.svg'
import Albertrating from '../assets/Images/Albertrating.svg'
import Albert from '../assets/Images/Albert.svg'
import Testamonial from './Testamonial'

const Rating = () => {
  const [testimonials, setTestimonials] = useState([])
  
  const getTestimonials = async () => {
    const res = await fetch('https://win24-assignment.azurewebsites.net/api/testimonials')
    const data = await res.json()
    setTestimonials(data)
      
  }

  useEffect(() => {
    getTestimonials()
  }, [])
  
  return (
    <section className="rating-container">
      <div className="container">
        
        <div className="flex">
          <div>
          <h2>Clients are Loving Our App</h2>
          </div>
            <div className="box-1">
          
              {
                testimonials.map((testimonials) => (
                  <Testamonial key={testimonials.id} item={testimonials} />
                ))
              }

              
            </div>
          </div>
          
        </div>



      </section>
  )
}

export default Rating