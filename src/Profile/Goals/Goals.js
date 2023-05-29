import { Formik, Form, Field } from 'formik'
import { useNavigate } from 'react-router-dom'
import './Goals.css'

export function Goals() {
  const navigate = useNavigate()
  return (
    <>
      <h1 className="goals__header">Цели</h1>
      <div className="goals__note">
        <h2 className="goals__subtitle">
          Для того, чтобы сформулировать свою цель, попробуйте ответить на следущие вопросы:
        </h2>
        <ul>
          <li>Почему я пришел в летнюю школу?</li>
          <li>Что я хочу получить/чего я хочу добиться в летней школе?</li>
          <li>Что я сделаю, чтобы достичь своих целей?</li>
        </ul>
      </div>
      <Formik
        initialValues={{
          goals: ''
        }}
        onSubmit={(values) => {
          navigate('/profile/course-list')
        }}
      >
        <Form>
          <Field className="goals__input" name="goals" as="textarea" />
          <div className="goals__btns">
            <button type="button" className="goals__btn" onClick={() => navigate(-1)}>Отменить</button>
            <button type="submit" className="goals__btn goals__btn_green">Отправить</button>
          </div>
        </Form>
      </Formik>
    </>
  )
}
