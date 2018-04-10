import React from 'react';
import Home from './home.jsx'
import Menu from './menu.jsx'
import About from './about.jsx'
class App extends React.Component {
  render(){
    return(
      <section>
        <Home />
        <Menu />
        <About />
      </section>
    )
  }
}

export default App;
