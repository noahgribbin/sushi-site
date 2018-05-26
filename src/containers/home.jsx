import React from 'react';
class Home extends React.Component {
  render(){
    return(
      <section id="home" className="home ">
        <div className="color-overlay"></div>
        <div className="home-content-container">
          <h1 className="home-title">SUSHI TOKYO</h1>
          <div>  
            <span className="number-font-match">206.522.4601</span>
          <div>
          </div>
            <span>TUE - SAT </span> : <span className="number-font-match"> 11:30 - 10</span>
          </div>
          <div>
            <span>SUN </span>: <span className="number-font-match"> 11:30 - 8:30</span>
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
