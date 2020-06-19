import React from 'react';
import Header from '../common/Header';
import Signup from '../common/Signup';
import Footer from '../common/Footer';

const style = {
    position: "absolute",
    bottom: 20,
    width: "100%",
    height: "2.5rem"
  };

function SignupPage() {
    return (<div className="container page">
        <div className="row"><Header /></div>
        <div className="row">
            <div className="col-md-12" ><Signup /></div>
            </div>
        <div className="row"><Footer style={style} /></div>
        </div>)
}

export default SignupPage;