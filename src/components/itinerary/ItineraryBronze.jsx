import React from 'react'

function ItineraryBronze({image, class_Id, itinerary, dresscode}) {
  console.log(itinerary)
  return (
    <>
    
    
    <img className={`itinerary-image itinerary-image-bronze itinerary-image-bronze-${class_Id}`} src={image} alt="" />
    <div className={`itinerary-container-bronze itinerary-container-bronze-${class_Id}`}>
      
      {itinerary.map((activity, key) => (
        <div key={key} className={`itinerary-activity-card itinerary-activity-card-${class_Id} itinerary-activity-card${class_Id}-${key}`}>
          <h3 className={`activity-title activity-title-${class_Id}`}>{activity.activity_name}</h3>
          <div className={`activity-card-text activity-card-text-${class_Id}`}>
            <p>{activity.activity_place}</p>
            <p>{activity.activity_hour}</p>
            <p className={`maps-link-${class_Id}-${key}`}><a className={`maps-link maps-link-${class_Id} `}  href={activity.activity_location}>Ubicación</a></p>
          </div>
        </div>
      ))}

      {/* DRESSCODE */}
      {dresscode.map((dresscode_type, key) => (
        <div key={key} className={`dresscode-card dresscode-card-${class_Id}`}>
          <h3 className='dresscode-card-title'>Dresscode</h3>
        <img className={`dresscode-image dresscode-image-${class_Id}`} src={dresscode_type.image} alt="" />
        <strong><p>{dresscode_type.type}</p></strong>
      </div>
      ))}
        
        
    </div>
    </>
  )
}

export default ItineraryBronze