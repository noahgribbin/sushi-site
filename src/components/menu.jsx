import React from 'react';
import MenuItem from './menuItem.jsx'

class MenuComponent extends React.Component {
  constructor(props){
    super(props)
    this.state={

    }
  }

  render(){
    console.log(this.props.menu.dishes);
    var items = this.props.menu.dishes.map((item, i) => {
      console.log(item, i);
      return(
        <MenuItem item={item} key={i}/>
      )
    })
    return(
      <section className='menu'>
          <h3 className="menu-title">{this.props.menu.categoryName}</h3>
          {items}
      </section>
    )
  }
}

export default MenuComponent
