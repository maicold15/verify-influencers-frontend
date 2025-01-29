import React from 'react';
import '../styles/ClaimCardStyles.css';

function ClaimCard({ claim }) {
  return (
    <div className="claim-card">
      <h4>{claim.text}</h4>
      <p>Estado: {claim.status}</p>
      {claim.confidence && <p>Confianza: {claim.confidence}%</p>}
    </div>
  );
}

export default ClaimCard;
