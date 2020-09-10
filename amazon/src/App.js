import React from 'react';
import Header from './Component/Header'
import Footer from './Component/Footer'
import {LoginComponent} from './Component/Login'
import {RegisterComponent} from './Component/Register'
// This is called pure component or stateless component
const App = function(){
    const CompanyName = "Pegasytems";
    return  <div>
                <Header title={CompanyName}/>
                <LoginComponent />
                <RegisterComponent />
                 <h1>Welcome to Pega</h1>
                 <Footer />
            </div>
};

export default App;

