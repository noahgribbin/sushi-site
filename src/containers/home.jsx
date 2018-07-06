import React from 'react';
import logo from '../assets/sushi-logo.svg'
class Home extends React.Component {
  render(){
    return(
      <section id="home" className="home ">
        <div className="color-overlay"></div>
        <div className="home-content-container">
          <h1 className="home-title">SUSHI TOKYO</h1>
          <div>
            <span className="number-font-match">206.522.4601</span>
          </div>
          <div>
          </div>
          <div>
            <span>6311 ROOSEVELT WAY NE</span>
          </div>
        </div>
      </section>
    )
  }
}

export default Home
