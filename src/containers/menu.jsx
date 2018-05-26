import React from 'react';
import $ from 'jquery'
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
  componentDidMount(){
    if($(window).width() > 900){
      console.log('bigger');
    let maxHeight = 0;
    $('.menu .menu-item').each(function(){
      if ($(this).height() > maxHeight) { maxHeight = $(this).height(); }
    });
    $('.menu .menu-item').height(maxHeight);
  }
  }
  componentDidUpdate(){
    if($(window).width() > 900){
      let maxHeight = 0;
      $('.menu .menu-item').each(function(){
        if ($(this).height() > maxHeight) { maxHeight = $(this).height(); }
      });
      $('.menu .menu-item').height(maxHeight);
    }
    }
  render(){
    var menus = menu.map((item, i) => {
      if(this.state.active === item.categoryId){
        return(
          <MenuComponent menu={item} key={i} />
        )
      }
    })
    return(
      <section id="menu" className="menu-container nav-buffer">
        <MenuSelector active={this.state.active} menu={menu} hoistState={this.hoistState}/>
        {menus}
      </section>
    )
  }
}

export default Menu;
