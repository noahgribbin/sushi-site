import React from 'react';
import Home from './home.jsx'
import Menu from './menu.jsx'
class App extends React.Component {
  render(){
    return(
      <section>
        <Home />
        <Menu />
      </section>
    )
  }
}

export default App;
