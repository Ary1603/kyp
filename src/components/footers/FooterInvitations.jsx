import React from 'react'
import { BsFacebook, BsInstagram } from 'react-icons/bs'

function FooterInvitations({class_Id}) {
  return (
    <footer className={`home-footer mt-5 invitation-footer invitation-footer-${class_Id}`}>
        <img id="kyp-logo-footer" src="/Home/kyp-logo.png" alt="" />
        <div  className="footer-body">
          <div  className="footer-body-head mt-4">
            <p style={{textAlign: 'center', width: '100%'}}>Comparte la emoción, sin límites ni fronteras.</p>
            
          </div>

          <div className="hr-footer"></div>
          <div className="footer-body-bottom">
            <p style={{textAlign: 'center', width: '100%'}}>Copyright © Invitaciones Kyp</p>
          </div>
        </div>
      </footer>
  )
}

export default FooterInvitations