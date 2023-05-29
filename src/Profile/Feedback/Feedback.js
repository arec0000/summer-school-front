import { Formik, Form, Field } from 'formik'
import { useNavigate } from 'react-router-dom';
import './Feedback.css'

export function Feedback() {
  const navigate = useNavigate()
  return (
    <>
      <h1 className="feedback__header">Обратная связь</h1>
      <div className="feedback__note">
        <h2 className="feedback__subtitle">
          Для того чтобы написать обратную связь попробуйте ответить на следующие вопросы:
        </h2>
        <ul>
          <li>Что я делал на проекте?</li>
          <li>Что понравилось?</li>
          <li>Что не понравилось?</li>
          <li>Что я бы изменил?</li>
        </ul>
      </div>
      <Formik
        initialValues={{
          feedback: ''
        }}
        onSubmit={(values) => {
          navigate('/profile/course-list')
        }}
      >
        <Form>
          <Field className="feedback__input" name="feedback" as="textarea" />
          <div className="feedback__btns">
            <button type="button" className="feedback__btn" onClick={() => navigate(-1)}>Отменить</button>
            <button type="submit" className="feedback__btn feedback__btn_green">Отправить</button>
          </div>
        </Form>
      </Formik>
    </>
  )
}
