import React, { useEffect, useState } from 'react';
import axios from 'axios';
import InfluencerCard from '../components/InfluencerCard';
import '../styles/HomeStyles.css';

function Home() {
  const [influencers, setInfluencers] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/influencers')
      .then((res) => setInfluencers(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="home container">
      <h1>Leaderboard de Influencers</h1>

      <div className="inf-list">
        {influencers.map((inf) => (
          <InfluencerCard key={inf.id} influencer={inf} />
        ))}
      </div>
    </div>
  );
}

export default Home;
