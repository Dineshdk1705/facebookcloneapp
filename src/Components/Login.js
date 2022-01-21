import { Button } from '@mui/material'
import React from 'react'
import '../Css/Login.css'
import { auth, provider } from '../firebase'
import { actionTypes } from '../ContextApi/reducer';
import { useStateValue } from '../ContextApi/StateProvider';



const Login = () => {
    const [state, dispatch] = useStateValue();

    const signIn = () => {
        //sign in
        auth.signInWithPopup(provider)
        .then(result => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            });
        })
        .catch(error => alert(error.message));
    }

    return (
        <div className="login">
            <div className="login__logo">
                
                <img src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png" alt="logo" /> 
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/2560px-Facebook_Logo_%282019%29.svg.png" id="fb_text_logo" alt="text-logo" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/2560px-Meta_Platforms_Inc._logo.svg.png" id="meta_logo" alt="text-logo" />

            </div>
            <Button type="submit" onClick={signIn}>Sign In</Button>
        </div>
    )
}

export default Login;