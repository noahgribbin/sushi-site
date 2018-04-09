import React from 'react';

class MenuItem extends React.Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render(){
    return(
      <div className='menu-item'>
        <h3>{this.props.item.name}</h3>
        <h4>{this.props.item.description}</h4>
        <h4>{this.props.item.price}</h4>
      </div>
    )
  }
}

export default MenuItem;
