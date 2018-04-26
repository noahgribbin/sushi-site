import React from 'react';

class Nav extends React.Component {
  constructor(props){
    super(props)
    this.onClickShowHide = this.onClickShowHide.bind(this)
    this.onClickNavigate = this.onClickNavigate.bind(this)
    this.state={
      showNav:false
    }
  }
  onClickNavigate(e){
    this.setState({showNav:false})
    document.body.style.overflow = "visible";
    let id = e.target.getAttribute('link-id');
    // let element = document.getElementById(id);
    $('html, body').animate({
      scrollTop: $(`#${id}`).offset().top
    }, 750);
    // element.scrollIntoView({behavior:"smooth"})
  }
  onClickShowHide(){
    document.body.style.overflow === "hidden" ? document.body.style.overflow = "visible" : document.body.style.overflow = "hidden" ;
    this.setState(prevState => ({
      showNav: !prevState.showNav
    }))
  }
  render(){
    return(
      <section>

      <div className={`nav-toggle ${this.state.showNav ? 'temp' : null}`}
           onClick={this.onClickShowHide}>{this.state.showNav}
      </div>
      <section className={`mobile-nav-container ${this.state.showNav ? ' show' : 'hide'}`}>
        <section className={`mobile-nav ${this.state.showNav ? 'show' : 'hide'}`}>
          <ul>
            <li onClick={this.onClickNavigate} link-id="home">Home</li>
            <li onClick={this.onClickNavigate} link-id="about">About</li>
            <li onClick={this.onClickNavigate} link-id="menu">Menu</li>
            <li onClick={this.onClickNavigate} link-id="contact">Contact</li>
          </ul>
        </section>
      </section>
    </section>
    )
  }
}

export default Nav;
