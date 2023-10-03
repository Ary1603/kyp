import React from 'react'
import TraditionalCountdown from '../countdown/TraditionalCountdown'

function CoverGold({cover_img, event_name, class_Id, event_date}) {

  return (
    <div
      className={`cover-invitation-container cover-invitation-container-${class_Id}`}
      style={{ backgroundImage: `url(${cover_img})` }}
    >
      <h1
        className={`cover-invitation-title cover-invitation-title-${class_Id}`}
      >
        {event_name}
      </h1>
      <div className="black-filter"></div>
        <TraditionalCountdown event_date={event_date.countdown} class_Id={class_Id}/>
    </div>
  )
}

export default CoverGold