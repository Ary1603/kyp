import React, { useState } from 'react'

function PricingplansCard({plan, path}) {
  const [demosPath, setDemosPath] = useState(['/demo-bronce, /demo-oro, /demo-diamante'])
  return (
    
    <>
      <div className={`card-pricing-plan card-pricing-plan-${plan.className}`}>
          <div className="card-details-pricing-plan">
            <h3 className={`text-title-pricing-plan text-title-pricing-plan-${plan.className}`}>{plan.title}</h3>
            <div className="text-body-pricing-plan">
              <ul>
                {plan.bronze.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
                {plan.gold.map((item, index) => (
                  <li key={index}>{(plan.className != 'gold') && (plan.className != 'diamond')?<del>{item}</del>:<>{item}</>}</li>
                ))}
                {plan.diamond.map((item, index) => (
                  <li key={index}>{plan.className != 'diamond'?<del>{item}</del>:<>{item}</>}</li>
                ))}
              </ul>
            </div>
          </div>
          
          <button className={`card-button-pricing-plan card-button-pricing-plan-${plan.className}`}>
            <a href={`${path}`}>
            Demo </a>
          </button>
        </div>
    </>
  )
}

export default PricingplansCard