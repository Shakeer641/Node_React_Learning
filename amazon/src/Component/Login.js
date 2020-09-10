import React,{Component} from 'react';

export class LoginComponent extends Component{
    constructor(){
            super();
            this.state={
                username:"",
                password:""
            }
    }
    //onchange handler event binding
    handleInputChange=(e)=>{
        console.log(e.target.value);
        let currentstate = this.state;
        currentstate[e.target.name]=e.target.value;
        this.setState(currentstate);
    }
    render(){
        return <div>
            <h1>Login</h1>
            <input type="text" placeholder="User Name" name="username" onChange={this.handleInputChange}/>
            <input type="text" placeholder="Password" name="password" onChange={this.handleInputChange}/>
    <h1>{this.state.username}</h1>
    <h1>{this.state.password}</h1>
            </div>
    }
}
