import React from 'react';

class Contact extends React.Component {
  constructor(props){
    super(props)
    this.state={

    }
  }
  render(){


    return(
      <section id="contact" className="contact nav-buffer">
        <h2 className="contact-title" >FIND US</h2>
        <div className="contact-container">
          <div className="contact-info">
            <div className="contact-info-center-wrapper">                
              <p>206 522 4601</p>
              <p className="open-hours-label">Monday: Closed</p>
              <p className="open-hours-label">Tuesday-Saturday 11:30–11:30 </p>
              <p className="open-hours-label">Sunday 11:30–8:30 </p>
            </div>
          </div>
          <div className="iframe-container">
            <iframe
              src={`https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=Sushi+Tokyo,Seattle+WA`}
              allowFullScreen>
            </iframe>
          </div>
          <div className="clearfix"></div>
        </div>
      </section>
    )
  }
}

export default Contact;
