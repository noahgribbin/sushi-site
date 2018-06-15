import React from 'react';
import Media from "react-media";
import $ from "jquery";

class Nav extends React.Component {
  constructor(props){
    super(props)
    this.onClickShowHide = this.onClickShowHide.bind(this)
    this.onClickNavigate = this.onClickNavigate.bind(this)
    this.handleScroll = this.handleScroll.bind(this)
    this.state={
      showNav:false,
      hamburger_alt: false,
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(){
    let height = $('#home').height();
    if($(window).scrollTop() > height-24){
      console.log('below');
      this.setState({hamburger_alt: true})
    }else{
      console.log('above');
      this.setState({hamburger_alt: false})
    }
    // console.log(height);

  }

  onClickNavigate(e){
    this.setState({showNav:false})
    document.body.style.overflow = "visible";
    let id = e.target.getAttribute('link-id');
    $('html, body').animate({
      scrollTop: $(`#${id}`).offset().top
    }, 750);
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
        <Media query="(max-width: 900px)">
          {matches =>
            matches ? (
              <section>
                <div className={`nav-toggle ${this.state.hamburger_alt ? 'hamburger-alt' : null}`} onClick={this.onClickShowHide}>
                  <i className={`nav-toggle fas fa-3x fa-bars ${this.state.showNav ? 'temp' : null} `}></i>
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
            ):(
              <section className="desktop-nav-container">
                  <ul>
                    <li onClick={this.onClickNavigate} link-id="home">Home</li>
                    <li onClick={this.onClickNavigate} link-id="about">About</li>
                    <li onClick={this.onClickNavigate} link-id="menu">Menu</li>
                    <li onClick={this.onClickNavigate} link-id="contact">Contact</li>
                  </ul>
              </section>
            )
          }
        </Media>
    </section>
    )
  }
}

export default Nav;
