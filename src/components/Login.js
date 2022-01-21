import { Button } from '@material-ui/core';
import React from 'react';
import './Login.css';
import { auth, provider } from '../firebase';
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";

const Login = () =>{
    const [state,dispatch] = useStateValue();
    const signIn = (e) =>{
        auth.signInWithPopup(provider)
        .then((result) => {
            console.log(result);
            dispatch({
                type:actionTypes.SET_USER,
                user: result.user,
            })
        })
        .catch((error) =>{
            alert(error.message);
        })
    }
    return(
        <div className="login">
            <div className="login__container">
                <img src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg" alt='' />
                <h1>Sign in to Slack Clone by <a href="https://github.com/Abhishek742">Abhishek</a></h1>
                <p>slackclone.com</p>
                <Button onClick={signIn} >Sign in with Google</Button>
            </div>
        </div>
    )
}

export default Login;