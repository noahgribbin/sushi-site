import React from 'react';
import MenuSelector from '../components/menu-selector.jsx'
import MenuComponent from '../components/menu.jsx'
import menu from '../data/menu.json'
class Menu extends React.Component {
  constructor(props){
    super(props)
    this.state={
      active:'traditional-rolls'
    }
    this.hoistState = this.hoistState.bind(this);
  }

  hoistState(category){
    this.setState({active:category})
  }

  render(){
    var menus = menu.map((item, i) => {
      console.log(item, i);
      if(this.state.active === item.categoryId){
        return(
          <MenuComponent menu={item} key={i} />
        )
      }
    })
    return(
      <section className="menu-container">
        <MenuSelector active={this.state.active} menu={menu} hoistState={this.hoistState}/>
        {menus}
      </section>
    )
  }
}

export default Menu;
