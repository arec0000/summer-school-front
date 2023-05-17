import { Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';

export function Auth() {
  return (
    <Formik
      initialValues={{
        email: '',
        password: ''
      }}
      onSubmit={(values, { resetForm }) => {
        console.log(values);
        resetForm();
      }}
    >
      {() => (
        <Form>
          <div className="form__fields">
            <Field
              className="form__input"
              type="email"
              name="email"
              placeholder="Электронная почта"
            />
            <Field
              className="form__input"
              type="password"
              name="password"
              placeholder="Пароль"
            />
          </div>
          <div className="form__controls">
            <Link className="form__redirect" to="/reg-auth/reg/">
              Зарегестрироваться
            </Link>
            <button className="form__btn" type="submit">
              Войти
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
