import React from 'react';
import Select from 'react-select';

class MenuSelector extends React.Component {
  constructor(props){
    super(props)
    this.onClick = this.onClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.state={
      avtive:'traditional-rolls',
      selectedOption: ''
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

  handleChange(selectedOption){
    this.setState({ selectedOption });
    console.log(`Selected: ${selectedOption.label}`);
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
    const { selectedOption } = this.state.selectedOption;
    const value = selectedOption && selectedOption.value;
    var select = <Select
                    name="form-field-name"
                    value={value}
                    onChange={this.handleChange}
                    searchable={false}
                    options={[
                    { value: 'one', label: 'One' },
                    { value: 'two', label: 'Two' },
                    ]}
                  />
    return(
      <section className="menu-selector">
        <ul>
          {select}
        </ul>
      </section>
    )
  }
}


export default MenuSelector;
