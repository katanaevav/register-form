import {PureComponent} from "react";
import PropTypes from "prop-types";

class ComponentCheckbox extends PureComponent {
  constructor(props) {
    super(props);

    this._changeHandler = this._changeHandler.bind(this);
  }

  _changeHandler(evt) {
    this.props.onChange(evt.target.checked);
  }

  render() {
    return (
      <li className="form__element checkbox">
        <input className="checkbox__input visually-hidden" type="checkbox" id="field-accept-terms" name="accept-terms" value="accept-terms" onChange={this._changeHandler}/>
        <label className="checkbox__label" htmlFor="field-accept-terms">Принимаю <a className="checkbox__link" href="#1">условия</a> использования</label>
      </li>
    );
  }

}

ComponentCheckbox.propTypes = {
  onChange: PropTypes.func.isRequired,
}

export default ComponentCheckbox;
