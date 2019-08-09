import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Users from './Users';
import axios from 'axios';

const UserForm = ({ errors, touched, values, handleSubmit, status }) => {

  const [users, setUsers] = useState([]);
  console.log(users);

  useEffect(() => {
    if(status) {
      setUsers([...users, status])
    }
  }, [status])

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
        .post(`http://localhost:5000/api/register`, values)
        .then(res => {
          localStorage.setItem('token', res.data.token);
          setStatus(res.data);
          console.log('response data', res.data);
        })
        .catch(err => console.error(err.response))
    }
  })(UserForm);

export default FormikUserForm;