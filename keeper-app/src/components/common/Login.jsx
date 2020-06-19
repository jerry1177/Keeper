import React, { useState } from 'react';
import Input from './Input';
import AlerMessage from './AlertMessage';

function Login() {
    const [formState, setFormState] = useState({
        email: '',
        password: ''
    });

    const [isValidInput, setIsValidInput] = useState(true);
    const [showMessage, setShowMessage] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");

    function validate(e) {
        e.preventDefault();
        const { email, password } = formState;
        if (!email.trim() || !password.trim() || password.length < 8) {
            setIsValidInput(false);
            setAlertMessage("Invalid Username or Password!")
            setShowMessage(true);

        } else {
            setIsValidInput(true);
            setAlertMessage("Invalid Input!");
            setShowMessage(true);
        }

    }

    function onChangeHandler(e) {
        const name = e.target.name;
        const value = e.target.value;

        setFormState(prevValue => {
            return { ...prevValue, [name]: value };
        });
    }

    return <form className="auth" onSubmit={validate}>
        <h1>Login</h1>
        { showMessage && <AlerMessage isError={!isValidInput} message={alertMessage} /> }
        <Input name="email" text="Email" type="email" placeholder="email" onChangeHandler={onChangeHandler}/>
        <Input name="password" text="Password" type="password" placeholder="password" onChangeHandler={onChangeHandler} />
        <button type="submit">Login</button>
    </form>
}

export default Login;
