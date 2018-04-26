import React from 'react';
import Home from './home.jsx'
import Menu from './menu.jsx'
import About from './about.jsx'
import Contact from './contact.jsx'
import Nav from './nav.jsx'
import Footer from './footer.jsx'
class App extends React.Component {
  render(){
    return(
      <section>
        <Nav />
        <Home />
        <About />
        <Menu />
        <Contact />
        <Footer />
      </section>
    )
  }
}

export default App;
