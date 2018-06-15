import React from 'react';

class Footer extends React.Component {
  constructor(props){
    super(props)
    this.state={

    }
  }
  render(){
    return(
      <section className="footer-continer">
        <section className="footer-links">
          <i className="far fa-envelope"></i>
        </section>
        <p>© Sushi Tokyo</p>
        {/* <p>|</p> */}
        <p>Web Design by Noah Gribbin</p>
      </section>
    )
  }
}

export default Footer;
