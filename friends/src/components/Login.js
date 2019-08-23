import React, { useState } from 'react';
import Loader from 'react-loader-spinner';
import axios from 'axios';

import { useForm } from '../hooks/handleHook';

const Login = () => {

    // const [creds, setCreds] = useState({
    //     credentials: {
    //         username: '',
    //         password: ''
    //     }
    // })

    const login = () => {
        console.log(fields);
        axios
            .post('http://localhost:5000/api/login', {...fields})
            .then(res => {
                localStorage.setItem('token', res.data.payload);
            })
            .catch(err => console.error(err.response));
    }

    // TODO delete this loggingIn and use global state
    const loggingIn = false;

    // TODO pass submit function into useForm()
    const { fields, submit, handleChanges } = useForm(() => login());



    return (
        <>
            <form onSubmit={submit}>
                <input type="text" name='username' onChange={handleChanges} />
                <input type="password" name='password' onChange={handleChanges} />
                <button>{loggingIn ?
                    <Loader type="Grid" color="#2F4F4F" height={10} width={60} /> :
                    "Login"}</button>
            </form>
        </>
    )
}

export default Login;