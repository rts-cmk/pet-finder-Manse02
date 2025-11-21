import React from 'react';
import { useNavigate } from 'react-router-dom';
import './last.scss';
import background from './assets/background.svg';

export default function DetailPage() {
  const navigate = useNavigate();

  function handleBack() {
    navigate('/details');
  }

  return (
    <div className="detail-screen">
      <div className="hero">
        <img src={background} alt="background" className="hero-bg" />
        <img src="/filebucket/dog1.png" alt="dog" className="dog-img" />
      </div>

      <div className="detail-card">
        <h2 className="name">Greyhound</h2>
        <p className="city">📍 New York City</p>

        <div className="badges">
          <div className="badge">
            <div className="icon">🐾</div>
            <div className="label">Greyhound</div>
          </div>
          <div className="badge">
            <div className="icon">⚧</div>
            <div className="label">Male</div>
          </div>
        </div>

        <p className="desc">The dog (Canis familiaris when considered a distinct species or Canis lupus familiaris when considered a subspecies of the wolf) is a domesticated carnivore of the family Canidae, known for its loyalty, intelligence, and long-standing companionship with humans across various cultures and environments.</p>

        <button className="back-btn" onClick={handleBack}>Back</button>
      </div>
    </div>
  );
}
