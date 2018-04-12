import React from 'react';
import Select from 'react-select';

class MenuSelector extends React.Component {
  constructor(props){
    super(props)
    this.onClick = this.onClick.bind(this)
    this.onClickFakeOption = this.onClickFakeOption.bind(this)
    this.onClickFakeSelect = this.onClickFakeSelect.bind(this)
    this.onChange = this.onChange.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.state={
      active:'traditional-rolls',
      activeName:'Traditional Rolls',
      hideOptions: true
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

  onClickFakeSelect(prevstate){
    this.setState(prevState => ({
          hideOptions: !prevState.hideOptions
      }));
  }
  onClickFakeOption(e){
    var id = e.target.getAttribute('id')
    var name = e.target.getAttribute('name')
    this.setState({
      active: id,
      activeName: name,
      hideOptions: true,
    }, () => {
      this.props.hoistState(this.state.active)
    })
  }
  onChange(e){
    this.setState({
      active: e.target.value
    }, () => {
      this.props.hoistState(this.state.active)
    })
  }

  handleChange(selectedOption){
    this.setState({ selectedOption });
  }

  render(){
    var state = this.state
    var options = this.props.menu.map((item, i) => {
        return(
          <li id={item.categoryId}
              className="fake-option"
              key={`option${i}`}
              name={item.categoryName}
              value={item.categoryId}
              onClick={this.onClickFakeOption}
              >
              {item.categoryName}
          </li>
        )
    })
    var items = this.props.menu.map((item, i) => {
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
        <div className="fake-select"
             onClick={this.onClickFakeSelect}>
                {this.state.activeName}
        </div>
        <ul className={`fake-option-ul ${this.state.hideOptions ? 'hide' :null}`}
            onChange={this.onChange}>
          {options}
        </ul>
      </section>
    )
  }
}


export default MenuSelector;
