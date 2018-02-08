import React, {Component} from 'react';
class Home extends Component {
  render() {
    return (
      <div className="homeLanding container has-text-centered">
        <h1 className="title">
           Happiness is Homemade
        </h1>
        <p className="subtitle">
          We set out to empower Vancouver’s decisions around finding a place to live. Make sure it’s the right choice – and not just your only choice.
        </p>
        <div className="videoOverlay"></div>
        <video playsInline autoPlay muted loop id="bgvid">
          <source src="moving.webm" type="video/webm"></source>
          <source src="moving.mp4" type="video/mp4"></source>
        </video>

      </div>
    )
  }
};

export default Home;