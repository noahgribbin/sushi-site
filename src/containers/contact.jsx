import React from 'react';

class Contact extends React.Component {
  constructor(props){
    super(props)
    this.state={

    }
  }
  render(){


    return(
      <section className="contact">
        <img src={`https://maps.googleapis.com/maps/api/staticmap?center=Berkeley,CA&zoom=14&size=400x400&key=${API_KEY}`}></img>
      </section>
    )
  }
}

export default Contact;
