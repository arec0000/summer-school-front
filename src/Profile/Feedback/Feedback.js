import { Formik, Form, Field } from 'formik'
import './Feedback.css'

export function Feedback() {
  return (
    <>
      <h1 className="feedback__header">Обратная связь</h1>
      <Formik
        initialValues={{
          feedback: ''
        }}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
        }}
      >
        <Form>
          <Field className="feedback__input" name="feedback" as="textarea" />
          <div className="feedback__btns">
            <button type="button" className="feedback__btn">Отменить</button>
            <button type="submit" className="feedback__btn feedback__btn_green">Отправить</button>
          </div>
        </Form>
      </Formik>
    </>
  )
}
