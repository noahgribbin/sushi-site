import React from 'react';
import Select from 'react-select';
import Media from "react-media";

class MenuSelector extends React.Component {
  constructor(props){
    super(props)
    this.onClick = this.onClick.bind(this)
    this.onClickFakeOption = this.onClickFakeOption.bind(this)
    this.onClickFakeSelect = this.onClickFakeSelect.bind(this)
    this.onClickShader = this.onClickShader.bind(this)
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
    document.body.style.overflow = "hidden";

    $('html, body').animate({
      scrollTop: $(`.fake-select`).offset().top - 41.25
    }, 750);

    this.setState(prevState => ({
          hideOptions: !prevState.hideOptions
      }));

    $('.select-box-carret').toggleClass('carret-down');
  }

  onClickShader(){
    document.body.style.overflow = "visible";
    this.setState({
      active: this.state.active,
      activeName: this.state.activeName,
      hideOptions: true,
    }, () => {
      this.props.hoistState(this.state.active)
    })
  }

  onClickFakeOption(e){
    document.body.style.overflow = "visible";
    var id = e.target.getAttribute('id')
    var name = e.target.getAttribute('name')
    console.log(name);
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
    console.log(selectedOption);
    this.setState({ selectedOption });
  }

  render(){
    var state = this.state
    var options = this.props.menu.map((item, i) => {
        return(
          <li id={item.categoryId}
              className="fake-option"
              key={`option${i}`}
              >
                <span className="menu-selector-span"
                  id={item.categoryId}
                  onClick={this.onClickFakeOption}
                  value={item.categoryId}
                  name={item.categoryName}
                  >
                  {item.categoryName}
                </span>
          </li>
        )
    })
    var items = this.props.menu.map((item, i) => {
      return(
        <li id={item.categoryId}
            onClick={this.onClick}
            key={i}
            className={`menu-selector-item
                         ${this.props.active === item.categoryId ? "active ": null}`
                      }
            >
              {item.categoryName}
        </li>
      )
    })
    return(
      // <Media query="(max-width: 1200px)">
      //   {matches =>
      //     matches ? (
      //       <section className="menu-selector">
      //         <div className={`fake-select ${!this.state.hideOptions ? "fake-select-border ": null}`}
      //              onClick={this.onClickFakeSelect}>
      //                 <span>{this.state.activeName}</span>
      //           <i className={`fas fa-caret-down select-box-carret ${!this.state.hideOptions ? "carret-down ": null}`}></i>
      //         </div>
      //         <ul className={`fake-option-ul ${this.state.hideOptions ? 'hide' :null} ${!this.state.hideOptions ? "fake-option-border ": null}`}
      //             onChange={this.onChange}>
      //           {options}
      //         </ul>
      //       </section>
      //     ):(
      //       <section className="menu-selector">
      //         <ul>{items}</ul>
      //       </section>
      //     )
      //   }
      // </Media>
        <section>
          <div className={`${!this.state.hideOptions ? 'overlay-shader': null} `}
               onClick={this.onClickShader}></div>
            <section className="menu-selector">

              <div className={`fake-select ${!this.state.hideOptions ? "fake-select-border ": null}`}
                   onClick={this.onClickFakeSelect}>
                      <span>{this.state.activeName}</span>
              </div>
              <ul className={`fake-option-ul ${this.state.hideOptions ? 'hide' :null} ${!this.state.hideOptions ? "fake-option-border ": null}`}
                  onChange={this.onChange}>
                {options}
              </ul>

            </section>

          </section>
    )
  }
}


export default MenuSelector;
