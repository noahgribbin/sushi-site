import React from 'react';

class MenuSelector extends React.Component {
  constructor(props){
    super(props)
    this.onClick = this.onClick.bind(this)
    this.state={
      avtive:'traditional-rolls',
    }
  }

  onClick(e){
    var id = e.target.getAttribute('id')
    this.setState({
      active: id
    }, () => {
      this.props.hoistState(this.state.active)
    })
  }

  render(){
    console.log(this.props.active, '}|}|}|}|}');
    var state = this.state
    var items = this.props.menu.map((item, i) => {
      console.log('popopopopopop', item)
      console.log(this.props.active, '{}{}{}{}{}{}{}{}{}');
      return(
        <li id={item.categoryId}
            onClick={this.onClick}
            key={i}
            className={`menu-selector-item
                         ${this.props.active === item.categoryId ? "active": null}`
                      }
            >
            {item.categoryName}
        </li>
      )
    })
    return(
      <section className="menu-selector">
        <ul>
          {items}
        </ul>
      </section>
    )
  }
}

export default MenuSelector;
