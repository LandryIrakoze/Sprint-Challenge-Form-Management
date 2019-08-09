import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Users from './Users';
import axios from 'axios';

const UserForm = ({ errors, touched, values, handleSubmit, status }) => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    if(status) {
      setUsers([...users, status])
    }
  })

  return(
      <>
          <Form>
              <Field type="text" name="username" placeholder="Username" />
              <Field type="password" name="password" placeholder="Password" />
              <button>Submit</button>
          </Form>
          <Users />
      </>
  )
}

const FormikUserForm = withFormik({
    mapPropsToValues({ username, password }) {
      return {
        username: username || "",
        password: password || ""
      };
    },

    validationSchema: Yup.object().shape({
      username: Yup.string().required(),
      password: Yup.string().required()
    }),
  
    handleSubmit(values, { setStatus }) {
      console.log(values);
      axios
        .post(`http://localhost:5000/api/register`)
        .then(res => setStatus(res.data))
        .catch(err => console.err(err.response))
    }
  })(UserForm);

export default FormikUserForm;