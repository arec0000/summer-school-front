import { Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import { useNavigateToTop } from '../../hooks/useNavigateToTop';

export function Auth() {
  const navigate = useNavigateToTop()
  return (
    <Formik
      initialValues={{
        email: '',
        password: ''
      }}
      onSubmit={(values, { resetForm }) => {
        navigate('/profile/course-list')
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
            <button className="form__btn" type="submit">
              Войти
            </button>
            <Link className="form__redirect" to="/reg-auth/reg/">
              Зарегестрироваться
            </Link>
          </div>
        </Form>
      )}
    </Formik>
  );
}
