import React, { Component } from 'react';
import Header from './Component/Header'
import Footer from './Component/Footer'
import {LoginComponent} from './Component/Login'
import {RegisterComponent} from './Component/Register'
import ProductList from './Component/ProductList';
// This is called pure component or stateless component
export class App extends Component {
    constructor(){
        super();
        this.state={
            CompanyName:"Amazon",
            cartCount:0   
        }
    }
    handleClick=(data)=>{
        console.log("clicked");
        this.setState({cartCount:this.state.cartCount+1});
        }
    render(){
    return  <div>
                <Header title={this.state.CompanyName} cartCount={this.state.cartCount}/>
                <ProductList handleClick={this.handleClick}/>
            </div>
    }
};

export default App;

