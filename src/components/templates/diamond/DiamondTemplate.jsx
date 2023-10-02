import React from 'react'


import ItineraryBronze from '../../itinerary/ItineraryBronze'
import BronzeConfirmationForm from '../../forms/BronzeConfirmationForm'
import TabMaps from '../../maps/TabMaps'
import FooterInvitations from '../../footers/FooterInvitations'
import CoverGold from '../../covers/CoverGold'
import Gallery from '../../gallery/Gallery'
import RecomendationsCard from '../../cards/RecomendationsCard'
import GiftTables from '../../cards/GiftTables'

function DiamondTemplate({invitation_data}) {
    console.log(invitation_data)
    let {id, class_Id, cover_img, event_name, event_date, phrase, images, event_details, gallery, recomendations, gift_tables} = invitation_data
    return (
      <div className={`gold-template gold-template-${class_Id}`}>
        
        <audio autoPlay='true' src="https://firebasestorage.googleapis.com/v0/b/invitaciones-bc51e.appspot.com/o/invitaciones%2Fdiamond_Demo%2Faudio%2Fsong_demo_diamond.mp3?alt=media&token=b1cf3b3b-9419-4997-8754-935bdec15cd5"></audio>
          <CoverGold  class_Id={class_Id} cover_img={cover_img} event_name={event_name} event_date={event_date}/>
          <section id='save-the-date-section'>
            <div className="save-the-date-container" >
              
              <h2 className={`save-the-date-title save-the-date-title-${class_Id}`}>¡ESTÁS INVITADO!</h2>
              <div className="event-date-container">
                  <div className={`hr-event-date hr-event-date-${class_Id}`}></div>
                  <p className={`event-date event-date-${class_Id}`}> {event_date.date}</p>
                  <div className={`hr-event-date hr-event-date-${class_Id}`}></div>
              </div>
              <p className={`invitation-phrase invitation-phrase-${class_Id}`}>{phrase}</p>
            </div>
              
          </section>
          <ItineraryBronze image={images[0]} class_Id={class_Id} itinerary={event_details.itinerary} dresscode={event_details.dresscode}/>
          <section className={`gallery-section gallery-section-${class_Id}`}>
          <Gallery class_Id={class_Id} gallery={gallery}/>
          </section>
          
          <div className="recomendations-section">
          <RecomendationsCard recomendations={recomendations} class_Id={class_Id}/>
          </div>
          
          {/* MAPS */}
          <TabMaps locations={event_details.event_locations} class_Id={class_Id}/>
          
  
            <GiftTables gift_tables={gift_tables} class_Id={class_Id}/>
  
          
          <BronzeConfirmationForm class_Id={class_Id} image={images[1]} id={id}/>
          <FooterInvitations class_Id={class_Id}/>
      </div>
    )
}

export default DiamondTemplate