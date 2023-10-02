import React from 'react'
import TraditionalCountdown from '../countdown/TraditionalCountdown'

function InvitationCover({cover_img, event_name, event_date, class_Id}) {
  return (
    <div className="cover-container" style={{backgroundImage: `url(${cover_img})`}}>
        <h1 className='event_name_bronze'>{event_name}</h1>
        <TraditionalCountdown event_date={event_date}/>

    </div>
  )
}

export default InvitationCover