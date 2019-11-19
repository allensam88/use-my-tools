import React, { useState } from 'react';
import AxiosWithAuth from '../../utils/AxiosWithAuth';
import styled from 'styled-components';

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
`;

const StyledInput = styled.input`
    font-size: 20px;    
    line-height: 25px;
    width: 200px;
    margin: 10px auto;
    padding-left: 5px;
    border: 2px solid #454851;
    border-radius: 5px;
`;

const StyledButton = styled.button`
    font-size: 20px;
    width: 120px;   
    margin: 10px auto; 
    background-color: #CE8147;
    border: 2px solid #454851;
    border-radius: 5px;
    cursor: pointer;

    :hover {
        background-color: gray;
    }
`;

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
        .post('/api/auth/login', credentials)
        .then(res => {
            localStorage.setItem('token', res.data.token)
            props.history.push('/tools')
        })
        .catch(err => console.log(err))
    }

    return (
        <div>
            <StyledForm onSubmit={login}>
                <StyledInput type="text" value={user} onChange={userHandler} placeholder="Username" />
                <StyledInput type="password" value ={pass} onChange={passHandler} placeholder="Password" />
                <StyledButton>Log In</StyledButton>
                <StyledButton onClick={() => {props.history.push('/sign-up')}}>Sign Up</StyledButton>
            </StyledForm>
        </div>
    )
}

export default Login;