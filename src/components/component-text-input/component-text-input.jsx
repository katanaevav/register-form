import React, {PureComponent} from "react";
import PropTypes from "prop-types";

class ComponentTextInput extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: ``,
    }

    this._inputEdit = this._inputEdit.bind(this);
  }

  _inputEdit(evt) {
    let regExpString = ``;

    switch (this.props.name) {
      case `name`:
        regExpString = `^[A-Za-zА-Яа-я\\s-]+$`;
        break;
      case `email`:
        regExpString = `^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$`;
        break;
      case `phone`:
        regExpString = `^[0-9\\-\\+\\()]{6,16}$`;
        break;
      default:
        regExpString = ``;
        break;
    }

    const regEx = new RegExp(regExpString);
    this.setState({ inputValue: evt.target.value });
    this.props.validate(regEx.test(evt.target.value));
  }

  render() {
    return (
      <li className="form__element text-input">
        <label className="text-input__label" htmlFor={this.props.name}>{this.props.label}</label>
        <input className="text-input__input" type="text" id={this.props.name} name={this.props.name} placeholder={this.props.placeHolder} onChange={this._inputEdit}/>
        <p className={this.props.isValid | this.state.inputValue === `` ? `text-input__error-text text-input__error-text--hide` : `text-input__error-text`}>Введено не корректное значение</p>
      </li>
    );
  }

}


ComponentTextInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeHolder: PropTypes.string.isRequired,
  isValid: PropTypes.bool.isRequired,
  validate: PropTypes.func.isRequired,
}

export default ComponentTextInput;
