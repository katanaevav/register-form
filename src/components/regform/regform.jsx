import {useState} from 'react';
import ComponentTextInput from '../component-text-input/component-text-input.jsx';
import ComponentCheckbox from '../component-checkbox/component-checkbox.jsx';
import ComponentCombobox from '../component-combobox/component-combobox.jsx';

const RegForm = () => {
  const [nameValidState, setNameValidState] = useState(false);
  const [emailValidState, setEmailValidState] = useState(false);
  const [phoneValidState, setPhoneValidState] = useState(false);
  const [languageSelectState, setLanguageSelectState] = useState(false);
  const [termsCheckState, setTermsCheckState] = useState(false);
  
  return (
      <form className="registration__form form" action="#">
        <ul className="form__elements">
          <ComponentTextInput
            label = {`Имя`}
            name = {`name`}
            placeHolder = {`Введите Ваше имя`}
            isValid = {nameValidState}
            validate = {setNameValidState}
          />
          <ComponentTextInput
            label = {`Email`}
            name = {`email`}
            placeHolder = {`Введите ваш email`}
            isValid = {emailValidState}
            validate = {setEmailValidState}
          />
          <ComponentTextInput
            label = {`Номер телефона`}
            name = {`phone`}
            placeHolder = {`Введите номер телефона`}
            isValid = {phoneValidState}
            validate = {setPhoneValidState}
          />
          <ComponentCombobox 
            label = {`Язык`}
            name = {`language`}
            placeHolder = {`Язык`}
            onChange = {setLanguageSelectState}
            values = {[`Русский`, `Английский`, `Китайский`, `Испанский`, `Испанский`]}
          />
          <ComponentCheckbox 
            onChange = {setTermsCheckState}
          />

          <li className="form__element submit">
            <button className="submit__button" type="submit" disabled={!nameValidState | !emailValidState | !phoneValidState | !languageSelectState | !termsCheckState}>Зарегистрироваться</button>
          </li>
        </ul>

      </form>
  );
}

export default RegForm;
