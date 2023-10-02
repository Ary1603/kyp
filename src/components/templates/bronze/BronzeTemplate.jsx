import React from 'react'
import CoverBronze from '../../covers/CoverBronze'
import ItineraryBronze from '../../itinerary/ItineraryBronze'
import BronzeConfirmationForm from '../../forms/BronzeConfirmationForm'
import TabMaps from '../../maps/TabMaps'
import FooterInvitations from '../../footers/FooterInvitations'

function BronzeTemplate({invitation_data}) {
    let {id, class_Id, cover_img, event_name, event_date, phrase, images, event_details, texture} = invitation_data
    console.log(invitation_data)
    //style={{backgroundImage: `url('${texture}')`}}
  return (
    <>
        <CoverBronze class_Id={class_Id} cover_img={cover_img} event_name={event_name} event_date={event_date}/>
        <section id='save-the-date-section'>
          <div className="save-the-date-container" >
            
            <h2 className={`save-the-date-title save-the-date-title-${class_Id}`}>¡ESTÁS INVITADO!</h2>
            <div className="event-date-container">
                <div className="hr-event-date"></div>
                <p className={`event-date event-date-${class_Id}`}> {event_date.date}</p>
                <div className="hr-event-date"></div>
            </div>
            <p className={`invitation-phrase invitation-phrase-${class_Id}`}>{phrase}</p>
          </div>
            
        </section>
        <ItineraryBronze image={images[0]} class_Id={class_Id} itinerary={event_details.itinerary} dresscode={event_details.dresscode}/>
        {/* MAPS */}
        <TabMaps locations={event_details.event_locations} class_Id={class_Id}/>

        <BronzeConfirmationForm class_Id={class_Id} image={images[1]} id={id}/>
        <FooterInvitations class_Id={class_Id}/>
    </>
  )
}

export default BronzeTemplate