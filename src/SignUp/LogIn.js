import './LogIn.css';
import React, { useState } from 'react';
import { signInWithGoogle } from "../Firebase.js";

function LogIn() {
    return (
        <div className="signin">
            <form action="">
                <h1>Sign In</h1>
                <input type="email"/>
                <input type="password"/>
                <button>Sign in</button>
                <h6>Not yet registered? <span className="signin_link">Sign up</span></h6>
            </form>
            <button class="login-with-google-btn" onClick={signInWithGoogle}>
                Sign In With Google
            </button>
        </div>
    );
}

export default LogIn;
