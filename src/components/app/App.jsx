import RegForm from '../regform/regform.jsx';

const App = () => {
  return (
    <section className="registration">
      <h1 className="registration__header">Регистрация</h1>
      <p className="registration__text">Уже есть аккаунт? <a className="registration__link" href="#1">Войти</a></p>

      <RegForm />

    </section>
  );
}

export default App;
