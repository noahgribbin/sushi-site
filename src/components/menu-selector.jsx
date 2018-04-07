import React from 'react';

class MenuSelector extends React.Component {
  constructor(props){
    super(props)
    this.onClick = this.onClick.bind(this)
    this.state={
      avtive:null,
    }
  }

  onClick(e){
    var id = e.target.getAttribute('id')
    console.log(id);
    this.setState({
      active: id
    })
  }

  render(){
    return(
      <section className="menu-selector">
        <ul>
          <li id="sushi-roll"
              onClick={this.onClick}
              className={'menu-selector-item ' + (this.state.active === 'sushi-roll' ? "active": null)}>
              Sushi Rolls
          </li>
          <li id="appetizer-&-salad"
              onClick={this.onClick}
              className={'menu-selector-item ' + (this.state.active === 'appetizer-&-salad' ? "active": null)}>
              Appetizer & Salad
          </li>
          <li id="nigiri"
            onClick={this.onClick}
            className={'menu-selector-item ' + (this.state.active === 'nigiri' ? "active": null)}>
            Nigiri
          </li>
        </ul>
        <span>{this.state.active}</span>
      </section>
    )
  }
}

export default MenuSelector;
