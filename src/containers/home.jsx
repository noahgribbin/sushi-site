import React from 'react';
class Home extends React.Component {
  render(){
    return(
      <section id="home" className="home ">
        <div className="color-overlay"></div>
        <div className="home-content-container">
          <h1 className="home-title">SUSHI TOKYO</h1>
          <h2>6311 Roosevelt Way NE, Seattle</h2>
          <h2>206.522.4601</h2>
        </div>
      </section>
    )
  }
}

export default Home
