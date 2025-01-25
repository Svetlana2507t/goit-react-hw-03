import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import s from './ContactForm.module.css';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Name is required'),
  number: Yup.string()
    .matches(/^\+?[0-9\s\-()]*$/, 'Invalid phone number')
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Phone number is required'),
});

function ContactForm({ onAdd }) {
  const handleSubmit = (values, actions) => {
    //console.log('Form submitted with values:', values);
    onAdd(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={s.formWrapper}>
        <div>
          <label htmlFor="name">Name:</label>
          <Field type="text" id="name" name="name" className={s.input} />
          <ErrorMessage name="name" component="div" className={s.error} />
        </div>

        <div>
          <label htmlFor="number">Number:</label>
          <Field type="tel" id="number" name="number" className={s.input} />
          <ErrorMessage name="number" component="div" className={s.error} />
        </div>

        <button type="submit" className={s.button}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}

export default ContactForm;
