import React from "react";
import "./Photos.css";

export default function Photos({ photos }) {
  return (
    <section className="Photos">
      <p>Pick a background for your quote!</p>
      <br />
      <div className="grid">
        {photos.map((photo, index) => {
          if (index > 4 && index < 11) {
            return (
              <div key={index}>
                <img src={photo.src.landscape} alt="Relaxing nature" />
              </div>
            );
          }
          return null;
        })}
      </div>
    </section>
  );
}
