import React from "react";

function RecomendationsCard({ recomendations, class_Id }) {
    let { recommendationTitle, recomendationPhrase, recommendationList } = recomendations;

    return (
        <>
            <h3 className={`recomendation-title recomendation-title-${class_Id}`}>
                {recommendationTitle}
            </h3>
            <p
                className={`recomendation-description recomendation-description-${class_Id}`}
            >
                {recomendationPhrase}
            </p>

            <div
                className={`recomendation-cards-container recomendation-cards-container-${class_Id}`}
            >
                {recommendationList.map((recomendation, key) => (
                    <div
                    key={key}
                        className={`recomendation-card recomendation-card-${class_Id} recomendation-card-${class_Id}-${key}`}
                    >
                        <div className={`recomendation-card-title recomendation-card-title-${class_Id} recomendation-card-title-${class_Id}-${key}`}>
                            <h4>{recomendation.place_name}</h4>
                        </div>

                        <div className={`recomendation-card-body recomendation-card-body-${class_Id} recomendation-card-body-${class_Id}-${key}`}>
                            <img src={recomendation.place_img} alt={recomendation.place_name} />
                            <p className={`recomendation-card-body-description recomendation-card-body-description-${class_Id} recomendation-card-body-description-${class_Id}-${key}`}>{recomendation.place_location}</p>
                            <a href={recomendation.place_location_link} ><p className={`recomendation-card-body-link recomendation-card-body-link-${class_Id} recomendation-card-body-link-${class_Id}-${key}`}>Ubicación</p></a>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default RecomendationsCard;
