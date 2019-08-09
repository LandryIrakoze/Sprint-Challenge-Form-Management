import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import Yup from 'yup';

const UserForm = () => {

    return(
        <>
            <Form>
                <Field type="text" name="username" placeholder="Username" />
                <Field type="password" name="password" placeholder="Password" />
                <button>Submit</button>
            </Form>
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
  
    handleSubmit(values) {
      console.log(values);
      
    }
  })(UserForm);

export default FormikUserForm;