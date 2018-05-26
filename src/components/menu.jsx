import React from 'react';
import MenuItem from './menuItem.jsx'

class MenuComponent extends React.Component {
  constructor(props){
    super(props)
    this.state={

    }
  }

  render(){
    var items = this.props.menu.dishes.map((item, i) => {
      return(
        <MenuItem item={item} key={i}/>
      )
    })
    return(
      <section className='menu'>
      
          {items}
      </section>
    )
  }
}

export default MenuComponent
