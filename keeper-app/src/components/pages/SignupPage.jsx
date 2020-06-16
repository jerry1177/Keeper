import React from 'react';
import Header from '../common/Header';
import Signup from '../common/Signup';
import Footer from '../common/Footer';

function SignupPage() {
    return (<div className="container page">
        <div className="row"><Header /></div>
        <div className="row">
            <div className="col-md-12" ><Signup /></div>
            </div>
        <div className="row"><Footer /></div>
        </div>)
}

export default SignupPage;