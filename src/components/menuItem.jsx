import React from 'react';
import Media from "react-media";

class MenuItem extends React.Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render(){
    return(
      <Media query="(max-width: 900px)">
        {matches =>
          matches ? (
      <div className='menu-item '>
        <div className='menu-item-inner'>
        <h3>{this.props.item.name}</h3>
        <h4>{this.props.item.description}</h4>
        <h4>{this.props.item.price}</h4>

      </div>
      </div>
    ):(
      <div className='menu-item menu-item-desktop '>
        <div className='menu-item-inner'>
          <h3>{this.props.item.name}</h3>
          <h4>{this.props.item.description}</h4>
          <h4>{this.props.item.price}</h4>

        </div>
      </div>

    )}
  </Media>
    )
  }
}

export default MenuItem;
