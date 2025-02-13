import React from "react";
import "./GameDetails.css";

const GameDetails = () => {
  return (
    <section className="game-details">
      <div className="game-image">
        <img src="/cod.jpg" alt="Call of Duty" />
      </div>
      <div className="game-info">
        <h2>Call of Duty</h2>
        <p>Drop into Season 02's new Overdrive game mode, experience The Tomb in Zombies, and more.</p>
        <button className="btn">See more...</button>
        <button className="btn play" onClick={() => alert("Redirecting to game...")}>Play Now</button>
        <div className="tags">
          <span>BattleField</span>
          <span>War</span>
          <span>Action</span>
          <span>Adventure</span>
        </div>
      </div>
    </section>
  );
};

export default GameDetails;
