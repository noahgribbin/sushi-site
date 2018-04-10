import React from 'react';
class About extends React.Component {
  render(){
    return(
      <section className="about">
        <section className="about-image"></section>
        <section className="about-text">
          <div className="about-text-wrapper">
            <h3>About Us</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
            </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
            </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
            </p>
            <div className="open-hours-containter">
              <p className="open-hours-label">Monday:	Closed</p>
              <p className="open-hours-label">Tue-Thu	11:30–11:30 </p>
              <p className="open-hours-label">Fri-Sat	11:30–11:30 </p>
              <p className="open-hours-label">Sun	11:30–8:30 </p>
            </div>
          </div>
        </section>
      </section>
    )
  }
}

export default About
