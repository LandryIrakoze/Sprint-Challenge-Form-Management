import React, { useState, useEffect } from 'react';
import FormikUserForm from './UserForm';
import { Route } from 'react-router-dom';
import UserData from './UserData';

const Data = () => {

    return(
        <>
            <Route exact path="/" render={props => <FormikUserForm {...props}/>} />
            <Route exact path="/userData" render={props => <UserData {...props}/>} />
        </>
    )
}

export default Data;