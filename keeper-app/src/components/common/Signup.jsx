import React, { useState } from 'react'
import Input from './Input'
import AlertMessage from './AlertMessage';

function Signup() {
    const [formState, setFormState] = useState({
        fName: '',
        lName: '',
        email: '',
        password: '',
        cPassword: ''
    });

    const [isValidInput, setIsValidInput] = useState(true);
    const [showMessage, setShowMessage] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");

    function validate(event) {
        event.preventDefault();
        const { fName, lName, email, password, cPassword } = formState;
        if (!fName.trim() || !lName.trim() || !email.trim()  
        || !password.trim() || !cPassword.trim() ) {
            console.log("Make sure all of the boxes are filled!")
            setIsValidInput(false);
            setAlertMessage("Make sure all of the boxes are filled!");
            setShowMessage(true);
        }
        else if (password !== cPassword) {
            setIsValidInput(false);
            setAlertMessage("Passwords must match!")
            setShowMessage(true);
        } else if (password.length < 8) {
            setIsValidInput(false);
            setAlertMessage("Passwords must be atleast 8 characters!")
            setShowMessage(true);
        }
        else{
            setIsValidInput(true);
            setAlertMessage("Success")
            setShowMessage(true);
        }
    }
    function onChangeHandler(e) {
        const name = e.target.name;
        const value = e.target.value;
        
        setFormState(prevState => {
            return {...prevState,[name]:  value}
        })
    }

    return <form className="auth" onSubmit={validate}>
        <h1>Signup</h1>
        {showMessage && <AlertMessage isError={!isValidInput} message={alertMessage}  />}
        <Input name="fName" text="First Name" type="text" placeholder="first name" onChangeHandler={onChangeHandler}/>
        <Input name="lName" text="Last Name" type="text" placeholder="last name" onChangeHandler={onChangeHandler}/>
        <Input name="email" text="Email" type="email" placeholder="email" onChangeHandler={onChangeHandler}/>
        <Input name="password" text="Password (atleast 8 characters)" type="password" placeholder="password" onChangeHandler={onChangeHandler}/>
        <Input name="cPassword" text="Confirm Password" type="password" placeholder="confirm password" onChangeHandler={onChangeHandler}/>
        <button type="submit">Login</button>
    </form>
}

export default Signup;