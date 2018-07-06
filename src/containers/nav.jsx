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
      fixed_nav: false,
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(){
    let homeHeight = $('#home').height();
    let navHeight = $('.desktop-nav-container').height();
    $(window).scrollTop() > homeHeight - 30 ? this.setState({hamburger_alt: true}) : this.setState({hamburger_alt: false});
    $(window).scrollTop() > homeHeight - navHeight ? this.setState({fixed_nav: true}) : this.setState({fixed_nav: false});
  }

  onClickNavigate(e){
    // this.setState({showNav:false})
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

                <section className={`mobile-nav-container ${this.state.showNav ? ' show' : 'hide'}`}
                         onClick={this.onClickShowHide}>
                  <section className={`mobile-nav ${this.state.showNav ? 'show' : 'hide'}`}>
                    <ul>
                      <li onClick={this.onClickNavigate} link-id="home">Home</li>
                      <li onClick={this.onClickNavigate} link-id="about">About</li>
                      <li onClick={this.onClickNavigate} link-id="menu">Menu</li>
                      <li onClick={this.onClickNavigate} link-id="contact">Contact</li>
                    </ul>
                    {/* <div className="nav-toggle black"></div> */}
                  </section>
                </section>
              </section>
            ):(
              <section className={`desktop-nav-container ${this.state.fixed_nav ? 'fixed-nav' : null}`}>
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
