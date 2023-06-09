import { Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import { useNavigateToTop } from '../../hooks/useNavigateToTop';

export function Reg() {
  const navigate = useNavigateToTop()
  return (
    <Formik
      initialValues={{
        FCs: '',
        age: '',
        email: '',
        password: '',
        passwordRepeat: ''
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
              type="text"
              name="FCs"
              placeholder="ФИО"
            />
            <Field
              className="form__input"
              type="number"
              name="age"
              placeholder="Возраст"
            />
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
            <Field
              className="form__input"
              type="password"
              name="passwordRepeat"
              placeholder="Повторите пароль"
            />
          </div>
          <div className="form__controls">
            <button className="form__btn" type="submit">
              Зарегестрироваться
            </button>
            <Link className="form__redirect" to="/reg-auth/auth/">
              У меня уже есть аккаунт
            </Link>
          </div>
        </Form>
      )}
    </Formik>
  );
}
