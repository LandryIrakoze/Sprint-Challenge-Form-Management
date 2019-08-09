import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Users from './Users';
import UserData from './UserData';
import axios from 'axios';

const UserForm = ({ errors, touched, values, handleSubmit, status }) => {

  const [users, setUsers] = useState([]);
  const [myData, setMyData] = useState([]);

  console.log(users);

  useEffect(() => {
    if(status) {
      setUsers([...users, status])
    }
  }, [status])

  useEffect(() => {
    axios
        .get(`http://localhost:5000/api/restricted/data`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `${localStorage.getItem('token')}`
          }
        })
        .then(res => {
          console.log('response data', res.data);
          setMyData(res.data);
        })
  },[])

  return(
      <>
          <Form>
              <Field type="text" name="username" placeholder="Username" />
              <Field type="password" name="password" placeholder="Password" />
              <button type="submit">Submit</button>
          </Form>
          <Users info={users}/>
          <UserData info={myData} />
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
        .catch(err => console.error(err.response));
    }
  })(UserForm);

export default FormikUserForm;