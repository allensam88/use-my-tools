import React, { useState } from 'react';
import AxiosWithAuth from '../../utils/AxiosWithAuth';

const SignUp = props => {
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [email, setEmail] = useState('');

    const userHandler = e => {
        setUser(e.target.value)
    };

    const passHandler = e => {
        setPass(e.target.value)
    };

    const confirmHandler = e => {
        setConfirmPass(e.target.value)
    };

    const emailHandler = e => {
        setEmail(e.target.value)
    };

    const register = e => {
        const newUser = {
            username: user,
            password: pass,
            email: email
        }

        if (pass === confirmPass) {
            e.preventDefault();
            AxiosWithAuth()
            .post('empty', newUser)
            .then(res => {
                alert(`Succesfully created user "${res.data.info.username}"!`)
                props.history.push('/')
            })
            .catch(err => console.log(err))
            setUser('');
            setPass('');
            setConfirmPass('');
            setEmail('');
        } else {
            e.preventDefault();
            alert('Error! Passwords do not match!')
        }
    }

    const passConfirm = () => {
        return pass === '' && confirmPass === '' || confirmPass.length === 0 ? ''
        : pass === confirmPass ? <p>Passwords match!</p>
        : <p>Passwords must match!</p>;
    }

    const passLength = () => {
        return pass.length === 0 || pass.length > 3 ? ''
        : <p>Password must be at least 4 characters!</p>
    }

    return (
        <div>
            <form onSubmit={register}>
                <input type="text" name="user" value={user} onChange={userHandler} placeholder="Username" />
                <input type="password" name="password" value={pass} onChange={passHandler} placeholder="Password" />
                {passLength()}
                <input type="password" name="confirm password" value={confirmPass} onChange={confirmHandler} placeholder="Confirm Password" />
                {passConfirm()}
                <input type="email" name="email" value={email} onChange={emailHandler} placeholder="Email Address" />
                <button>Register</button>
            </form>
        </div>
    )
}

export default SignUp;