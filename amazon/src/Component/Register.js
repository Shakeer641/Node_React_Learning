import React,{Component} from 'react';

export class RegisterComponent extends Component{
    constructor(){
        super();
        this.state={
            username:"",
            password:"",
            firstname:"",
            lastname:"",
            email:"",
            age:"",
            gender:""
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
        <h1>Registration</h1>
        <form>
            <div>
                <label >User Name :  </label>
                <input type="text" placeholder="username" name="username" onChange={this.handleInputChange}/>
            </div>
            <div>
                <label >Password  :  </label>
                <input type="password" placeholder="Password" name="password" onChange={this.handleInputChange}/>
            </div>
            <div>
                <label >First Name:  </label>
                <input type="text" placeholder="firstname" name="firstname" onChange={this.handleInputChange}/>
            </div>
            <div>
            <   label >Last Name  :  </label>
                <input type="text" placeholder="lastname" name="lastname" onChange={this.handleInputChange}/>
            </div>
            <div>
                <label >Email     :  </label>
                <input type="email" placeholder="Email" name="email" onChange={this.handleInputChange}/>
            </div>
            <div>
                <label >Age       :  </label>
                <input type="number" placeholder="Age" name="age" onChange={this.handleInputChange}/>
            </div>
            <div>
                <input type="radio" id="male" name="gender" value="male" onChange={this.handleInputChange}/>
                <label >Male</label>
            </div>
            <div>
                <input type="radio" id="female" name="gender" value="female" onChange={this.handleInputChange}/>
                <label for="female">Female</label>
            </div>
            <div>
                <input type="checkbox" onChange={this.handleInputChange}/>
                <label >I Agree the terms and conditions</label>
            </div>
            <div>
                <button type="button" onClick={this.handleInputChange}>Register</button>
            </div>
        </form>
        <h3>{this.state.username}</h3>
        <h3>{this.state.password}</h3>
        <h3>{this.state.firstname}</h3>
        <h3>{this.state.lastname}</h3>
        <h3>{this.state.email}</h3>
        <h3>{this.state.age}</h3>
        <h3>{this.state.gender}</h3>


        </div>
}
}
