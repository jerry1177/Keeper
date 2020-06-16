import React from 'react';
import Header from '../common/Header';
import Login from '../common/Login';
import Footer from '../common/Footer';

function LoginPage() {
    return (<div className="container page">
        <div className="row"><Header /></div>
        <div className="row">
            <div className="col-md-12" ><Login /></div>
            </div>
        <div className="row"><Footer /></div>
        </div>)
}

export default LoginPage;