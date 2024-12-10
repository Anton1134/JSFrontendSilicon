import React from 'react'
import StarRating from './StarRating'
import Quotes from '../assets/Images/quotes.svg'

const Testamonial = ({item}) => {
  return (
          <>
                <img className="quotes" src={Quotes} alt="" />
                <StarRating starRating={item.starRating} />
              <p>{item.comment}</p>
            <img className="avatar" src={item.avatarUrl} alt="avatar" />
            <div className ="author">
                <h6 className="name">{item.author}</h6>
                <p className="role">{item.jobRole}</p>
            </div>
        </>
  )
}

export default Testamonial