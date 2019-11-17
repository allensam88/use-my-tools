import React, { useState } from 'react';
import AxiosWithAuth from '../../utils/AxiosWithAuth';

const Login = props => {
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');

    const userHandler = e => {
        setUser(e.target.value)
    };

    const passHandler = e => {
        setPass(e.target.value)
    };

    const login = e => {
        e.preventDefault();

        const credentials = {
            username: user,
            password: pass
        }

        AxiosWithAuth()
        .post('/api/login', credentials)
        .then(res => {
            localStorage.setItem('token', res.data.token)
            props.history.push('/client-list')
        })
        .catch(err => console.log(err))
    }

    return (
        <div>
            <form onSubmit={login}>
                <input type="text" value={user} onChange={userHandler} placeholder="Username" />
                <input type="password" value ={pass} onChange={passHandler} placeholder="Password" />
                <button>Log In</button>
            </form>
        </div>
    )
}

export default Login;