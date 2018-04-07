import React from 'react';
import MenuSelector from '../components/menu-selector.jsx'
class Menu extends React.Component {
  constructor(props){
    super(props)
    this.state={
    }
  }
  render(){
    return(
      <section>
        <MenuSelector />
      </section>
    )
  }
}

export default Menu;
