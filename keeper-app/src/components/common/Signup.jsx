import React from 'react'

function Signup() {
    return <form className="auth">
        <h1>Signup</h1>
        <input type="text" placeholder="first name"/>
        <input type="text" placeholder="last name"/>
        <input type="email" placeholder="email"/>
        <input type="password" placeholder="password"/>
        <input type="password" placeholder="confirm password"/>
        <button type="submit">Login</button>
    </form>
}

export default Signup;