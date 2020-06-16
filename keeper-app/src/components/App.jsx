import React, { useState, Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
const ListPage = lazy(()=>import('./pages/ListPage'));
const LoginPage = lazy(()=>import('./pages/LoginPage'));
const SignupPage = lazy(()=>import('./pages/SignupPage'));


function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    
    return ( <Router>
        
          <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/home"> 
              {isLoggedIn ? <ListPage />  : <Redirect to="/login" />}
            </Route> 
            <Route path="/login" component={LoginPage} />      
            <Route path="/signup" component={SignupPage} />  
                          
            <Route path="/" >
              <Redirect to="/login" />
            </Route>
            
          </Switch>
          </Suspense>
      </Router>
    );
}

export default App;