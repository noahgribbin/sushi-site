import React from 'react';
class Home extends React.Component {
  render(){
    return(
      // <h1>SUSHI TOKYO</h1>
      // <h3>(206) 522-4601</h3>
      // <h3>6311 Roosevelt Way NE, Seattle, WA 98115</h3>
      // <a href="#menu">V</a>
      <section className="home">
        <div className="color-overlay"></div>
        <div className="home-content-container">
          <h1 className="home-title">SUSHI TOKYO</h1>
          <h2>6311 Roosevelt Way NE, Seattle</h2>
          <h2>206 522 4601</h2>
        </div>
      </section>
    )
  }
}

export default Home
