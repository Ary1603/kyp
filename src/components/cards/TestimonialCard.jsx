import React from 'react'

function TestimonialCard({card_text}) {
  return (
    <div className="testimonial-card" id={`testimonial-card-id-${card_text.id}`}>
        <p id='card-testimony'>{card_text.testimony}</p>
        
        <p id='testimony-name'>- {card_text.name}</p>
        <img id={`collimas-img-${card_text.id}`} className='comillas' src="/Home/comillas.png" alt="" />
    
    </div>
  )
}

export default TestimonialCard