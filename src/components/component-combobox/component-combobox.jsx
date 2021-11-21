import React, {PureComponent} from "react";
import PropTypes from "prop-types";

class ComponentCombobox extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    }

    this.inputRef = React.createRef();
    this.linkRef = React.createRef();

    this._changeHandler = this._changeHandler.bind(this);
    this._dropDownClickHandler = this._dropDownClickHandler.bind(this);
    this._globalClickHandler = this._globalClickHandler.bind(this);
    this._globalKeydownHandler = this._globalKeydownHandler.bind(this);
  }

  _changeHandler(evt) {
    evt.preventDefault();
    this.linkRef.current.classList.remove(`combobox__select--not-selected`);
    this.linkRef.current.innerText = evt.target.innerText;
    this.inputRef.current.value = evt.target.innerText;
    this.setState({ isOpen: false })
    this.linkRef.current.focus();

    this.props.onChange(true);
  }

  _dropDownClickHandler(evt) {
    evt.preventDefault();
    this.setState({ isOpen: !this.state.isOpen })
    
  }

  _globalClickHandler(evt) {
    if (evt.target && evt.target.dataset.name !== this.props.name && this.state.isOpen) {
      this.setState({ isOpen: false });
    }
  }

  _globalKeydownHandler(evt) {
    if (evt.target && this.state.isOpen && evt.key === `Escape`) {
      this.setState({ isOpen: false });
      this.linkRef.current.focus();
    }
    if (evt.target && !this.state.isOpen && evt.target.dataset.name === this.props.name && evt.key === `F4`) {
      this.setState({ isOpen: true });
    }
  }


  componentDidMount() {
    window.addEventListener(`click`, this._globalClickHandler);
    window.addEventListener(`keydown`, this._globalKeydownHandler);
  }

  componentWillUnmount() {
    window.removeEventListener(`click`, this._globalClickHandler);
    window.removeEventListener(`keydown`, this._globalKeydownHandler);
  }
  

  render() {
    const selectOptionsList = [...new Set(this.props.values)].map((option) => (
      <li key={option} className="combobox__option"><a href="#1" onClick={this._changeHandler}>{option}</a></li>
    ));

    const options = this.state.isOpen ? (<ul className="combobox__options">{selectOptionsList}</ul>) : ``;

    

    return (
      <li className="form__element combobox">
        <label className="combobox__label" htmlFor={this.props.name}>{this.props.label}</label>
        <input className="combobox__input" type="hidden" id={this.props.name} name={this.props.name} ref={this.inputRef} />
        <a data-name={this.props.name} href="#1" className="combobox__select combobox__select--not-selected" ref={this.linkRef} onClick = {this._dropDownClickHandler}>{this.props.placeHolder}</a>

        {options}

        <p className="combobox__error-text combobox__error-text--hide">Введено не корректное значение</p>
      </li>
    );
  }

}

ComponentCombobox.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeHolder: PropTypes.string.isRequired,
  values: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func,
}

export default ComponentCombobox;
