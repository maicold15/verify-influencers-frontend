import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ClaimCard from '../components/ClaimCard';
import '../styles/InfluencerDetailStyles.css';

function InfluencerDetail() {
  const { id } = useParams();
  const [influencer, setInfluencer] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/influencers/${id}`)
      .then((res) => setInfluencer(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!influencer) return <div className="container">Cargando...</div>;

  return (
    <div className="inf-detail container">
      <div className="inf-header">
        <div className="inf-info">
          <h1>{influencer.name}</h1>
          <p>Seguidores: {influencer.followers}</p>
          <p>Puntuación: {influencer.score}%</p>
        </div>
      </div>

      {/* NUEVA SECCIÓN: MOSTRAR EL SUMMARY DE WIKIPEDIA */}
      <div className="summary-section" style={{ marginTop: '1rem' }}>
        <h2>Wikipedia Summary</h2>
        <p>{influencer.summary || '(No summary found)'}</p>
      </div>

      <div className="claims-section" style={{ marginTop: '2rem' }}>
        <h2>Claims Analysis</h2>
        <div className="claims-list">
          {influencer.claims?.map((claim, index) => (
            <ClaimCard key={index} claim={claim} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default InfluencerDetail;
