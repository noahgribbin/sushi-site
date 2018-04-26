import React from 'react';

class Contact extends React.Component {
  constructor(props){
    super(props)
    this.state={

    }
  }
  render(){


    return(
      <section id="contact" className="contact">
        <div className="contact-container">
          <div className="contact-info">
            <h2>Check Us Out</h2>
            <p>6311 Roosevelt Way NE, Seattle</p>
            <p>206 522 4601</p>
          </div>
          <div className="iframe-container">
            <iframe
              src={`https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=Sushi+Tokyo,Seattle+WA`}
              allowFullScreen>
            </iframe>
          </div>
        </div>
      </section>
    )
  }
}

export default Contact;
