import React from "react";
import { useNavigate } from 'react-router-dom';
import './main.scss';

export default function Details() {
  const navigate = useNavigate();

  const pets = [
    {
      name: "Greyhound",
      city: "New York City",
      img: "/filebucket/dog1.png",
      liked: true,
    },
    {
      name: "Dobermann",
      city: "Atlanta",
      img: "/filebucket/dog2.png",
      liked: false,
    },
    {
      name: "Pomeranian",
      city: "Philadelphia",
      img: "/filebucket/dog3.png",
      liked: true,
    },
  ];

  return (
    <div className="details-page">
      <header className="top-bar">
        <div className="user-info">
          <img src="/filebucket/user.jpg" className="avatar" alt="profile" />
          <span className="location">New York City ▾</span>
        </div>
        <div className="bell">🔔</div>
      </header>

      <div className="filter-tabs">
        <button>Cats</button>
        <button className="active">Dogs</button>
        <button>Birds</button>
        <button>Other</button>
      </div>

      <div className="pet-list">
        {pets.map((pet, i) => (
          <div className="pet-card" key={i}>
            <div className="heart-badge">
              <span className={`heart ${pet.liked ? "liked" : ""}`}>❤</span>
            </div>

            <img src={pet.img} className="pet-img" alt={pet.name} />
            <div className="pet-info">
              <div className="name-row">
                <h3>{pet.name}</h3>
              </div>

              <p className="city">
                <span className="pin">📍</span>
                {pet.city}
              </p>

              <p className="desc">
                Taking care of a pet is my favorite, it helps me to relieve stress and fatigue.
              </p>
            </div>
          </div>
        ))}
      </div>

      <footer className="bottom-nav">
        <span className="nav-btn active">🏠</span>
        <span className="nav-btn">💬</span>
        <span className="nav-btn">❤️</span>
        <span
          className="nav-btn"
          role="button"
          aria-label="Settings"
          onClick={() => navigate('/detail')}
        >
          ⚙️
        </span>
      </footer>
    </div>
  );
}
