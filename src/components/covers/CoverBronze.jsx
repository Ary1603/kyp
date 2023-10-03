import React from "react";

function CoverBronze({ cover_img, event_name, class_Id }) {

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
    </div>
  );
}

export default CoverBronze;
