import React from 'react';

function Login() {
    return <form className="auth">
        <h1>Login</h1>
        <input type="text" placeholder="email"/>
        <input type="text" placeholder="password"/>
        <button type="submit">Login</button>
    </form>
}

export default Login;
