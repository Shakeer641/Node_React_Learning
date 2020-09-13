import React,{Component} from 'react';
import axios from 'axios';

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
            gender:"",
            countrylist:[]
        }
}
async componentDidMount(){
   /* fetch('https://restcountries.eu/rest/v2/all').then(result => {
        console.log(result);
        return result.json();
    }).catch(err => {
        console.log(err);
    }).then(finalresult => {
        console.log(finalresult);
    })*/
        let countrylist = await axios('https://restcountries.eu/rest/v2/all');
        console.log(countrylist);
        this.setState({countrylist: countrylist.data});
    };
    
    bindDataToDropdown = ()=>{
        return this.state.countrylist.map((item,index) => {
        return <option value={item.alpha2code}>{item.name}</option>
        });
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
        <div className="form-group row">
            <label for="colFormLabelSm" className="col-sm-2 col-form-label col-Form-label-Sm">UserName</label>
            <div className="col-sm-10">
                <input class="form-control form-control-sm" 
                    type="text" placeholder="username" name="username" onChange={this.handleInputChange}/>
            </div>
        </div>
        <div className="form-group row">
            <label for="colFormLabelSm" className="col-sm-2 col-form-label col-Form-label-Sm">Password</label>
            <div className="col-sm-10">
                <input class="form-control form-control-sm" 
                    type="password" placeholder="Password" name="password" onChange={this.handleInputChange}/>
            </div>
        </div>
        <div className="form-group row">
            <label for="colFormLabelSm" className="col-sm-2 col-form-label col-Form-label-Sm">First Name</label>
            <div className="col-sm-10">
                <input class="form-control form-control-sm" 
                    type="text" placeholder="firstname" name="firstname" onChange={this.handleInputChange}/>
            </div>
        </div>
        <div className="form-group row">
            <label for="colFormLabelSm" className="col-sm-2 col-form-label col-Form-label-Sm">Last Name</label>
            <div className="col-sm-10">
                <input class="form-control form-control-sm" 
                    type="text" placeholder="lastname" name="lastname" onChange={this.handleInputChange}/>
            </div>
        </div>
        <div className="form-group row">
            <label for="colFormLabelSm" className="col-sm-2 col-form-label col-Form-label-Sm">Email</label>
            <div className="col-sm-10">
                <input class="form-control form-control-sm" 
                    type="email" placeholder="Email" name="email" onChange={this.handleInputChange}/>
            </div>
        </div>
        <div className="form-group row">
            <label for="colFormLabelSm" className="col-sm-2 col-form-label col-Form-label-Sm">Age</label>
            <div className="col-sm-10">
                <input class="form-control form-control-sm" 
                    type="number" placeholder="Age" name="age" onChange={this.handleInputChange}/>
            </div>
        </div>
        <div className="form-group row">
            <label for="countrylist" className="col-sm-2 col-form-label">countrylist</label>
            <div className="col-sm-10">
            <select className="form-control" name="country" id="countrylist" onChange={this.handleChange}>
                {this.bindDataToDropdown()}
            </select>
            </div>
        </div>      
        <div className="form-group row">
            <label for="colFormLabelSm" className="col-sm-2 col-form-label">Gender</label>
            <div className="col-sm-10">
                <div className="custom-control custom-radio custom-control-inline">
                    <input class="custom-control-input" 
                    type="radio" id="gender1" name="gender" value="male" onChange={this.handleInputChange}/>
                    <label for="gender1" class="custom-control-label">Male</label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                    <input class="custom-control-input" 
                    type="radio" id="gender2" name="gender" value="female" onChange={this.handleInputChange}/>
                    <label for="gender2" class="custom-control-label">Female</label>
                </div>
            </div>
        </div>
        </form>
    </div>
}
}
