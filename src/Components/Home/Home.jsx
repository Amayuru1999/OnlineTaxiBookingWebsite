import React from "react";
import video from "../../assests/uber.mp4";

const Home = () => {
  return (
    <div className="home flex container">
      <div className="mainText">
        <h1>Create Ever-lasting Memories With Us</h1>
      </div>

      <div className="homeImages flex">
        <div className="videoDiv">
          <video src={video} autoPlay muted loop className="video"></video>
        </div>
        {/* <img src={car} className="car" /> */}
      </div>
    </div>
  );
};

export default Home;
