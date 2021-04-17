import React from 'react'
import "../css/Login.css"
import { auth, provider } from "../firebase";
import { useStateValue } from "../contexts/StateProvider";
import { actionTypes } from "../contexts/reducer";
const Login = () => {

    const [state, dispatch] = useStateValue();

    const signIn = async () => {
        try {
            const result = await auth.signInWithPopup(provider)

            dispatch({
                type: actionTypes.SET_USER,
                user: result.user
            })
        } catch (err) {
            alert(err);
        }
    }
    return (
        <div className="login">
            <div className="login__logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/900px-Facebook_f_logo_%282019%29.svg.png" alt="" width="150" />
                <img src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg" alt="facebook" width="250" />
            </div>

            <button type="submit" onClick={signIn}>Sign In</button>
        </div>
    )
}

export default Login
