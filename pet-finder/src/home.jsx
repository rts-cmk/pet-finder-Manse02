import React from "react";
import { useNavigate } from 'react-router-dom';
import "./first.scss";
import catImg from "./assets/animal.svg";

export default function Onboarding() {
  const navigate = useNavigate();

  function handleSkip() {
    navigate('/details');
  }

  return (
    <div className="onboarding-page">
      <div className="onboarding-illustration">
        <img src={catImg} alt="cat" className="onboarding-img" />
      </div>

      <div className="onboarding-content">
        <h2 className="title">My Pets</h2>

        <p className="subtitle">
          Taking care of a pet is my favorite, it helps me to gain stress and fatigue.
        </p>
      </div>

      <div className="bottom-bar">
        <button className="skip-pill" onClick={handleSkip}>Skip</button>
      </div>
    </div>
  );
}
