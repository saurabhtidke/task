import React from 'react';
import { useState } from 'react';
import Person2Icon from '@mui/icons-material/Person2';
import LockIcon from '@mui/icons-material/Lock';
import PropTypes from 'prop-types';
import swal from 'sweetalert';

// Get data by fetch method 

async function loginUser(credentials) {
    return fetch('https://react-tasks-nodejs-api.herokuapp.com/user/login', {
        method: 'GET',
        headers: {
            'X-API-Key': 'Z9Q7WKEY7ORGBUFGN3EG1QS5Y7FG8DU29GHKKSZH'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}
export const Login = () => {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const response = await loginUser({
            username,
            password
        });
        if ('accessToken' in response) {
            swal("Success", response.message, "success", {
                buttons: false,
                timer: 2000,
            })

                // save data to localStorage 

                .then((value) => {
                    localStorage.setItem('accessToken', response['accessToken']);
                    localStorage.setItem('user', JSON.stringify(response['user']));
                    window.location.href = "/profile";
                });
        } else {
            swal("Failed", response.message, "error");
        }
    }
    return (
        <div className='login'>
            <h1 className='main'>Login</h1>
            <p className='sub'>Enter your account login details.</p>
            <div className='login1'>
                <form onSubmit={handleSubmit}>
                    <i><Person2Icon className='id' /> </i>
                    <input className='user' type="email" placeholder='User name or Email' onChange={e => setUserName(e.target.value)} /><br />
                    <i><LockIcon className='id' /></i>
                    <input className='pass' type="password" placeholder='Password' onChange={e => setPassword(e.target.value)} /><br />
                    <button className='butt' type="submit"><strong>Sign in</strong></button>
                </form>
            </div>
        </div >
    )
}
Login.propTypes = {
    setToken: PropTypes.func.isRequired
};