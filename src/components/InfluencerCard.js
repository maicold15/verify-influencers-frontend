import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/InfluencerCardStyles.css';

function InfluencerCard({ influencer }) {
  return (
    <div className="inf-card">
      <h3>{influencer.name}</h3>
      <p>Score: {influencer.score}%</p>
      <p>Followers: {influencer.followers}</p>
      <Link to={`/influencer/${influencer.id}`} className="detail-link">
        Ver Detalles
      </Link>
    </div>
  );
}

export default InfluencerCard;
