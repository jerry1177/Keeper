import React from 'react';
import Header from '../common/Header';
import Login from '../common/Login';
import Footer from '../common/Footer';

const style = {
  position: "absolute",
  bottom: 20,
  width: "100%",
  height: "2.5rem"
};

function LoginPage() {
    return (<div className="container page">
        <div className="row"><Header /></div>
        <div className="row">
            <div className="col-md-12" ><Login /></div>
        </div>
        <Footer style={style} />
        </div>)
}

export default LoginPage;