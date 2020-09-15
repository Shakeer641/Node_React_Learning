import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
/*
import Button from "./button";
import Counter from "./counter";
import TextBox from "./TextBox";
class App extends Component {
  constructor(){
    super();
    this.state={
      count:0
    }

  }
  handleClick=()=>{
    console.log("Clicked");
    this.setState({count:this.state.count+1})
  }
  DechandleClick=()=>{
    console.log("Clicked");
    this.setState({count:this.state.count-1})
  }
  render(){
  return (
    <div className="App">
      <TextBox />
      <Counter count={this.state.count}/>
      <Button clickButton={this.handleClick} />
      <Button clickButton={this.DechandleClick} />
    </div>
  );
  }
}

*/

const ThemeContext = React.createContext('light');
class App extends Component {
    render() {
      return (
    <ThemeContext.Provider value="Light">
      <Toolbar />
    </ThemeContext.Provider>
    );
  }
}
// A component in the middle doesn't have to
// pass the theme down explicitly anymore.
function Toolbar() {
return (
  <div>
    <ThemedButton />
  </div>
);
}

class ThemedButton extends React.Component {
// Assign a contextType to read the current theme context.
// React will find the closest theme Provider above and use its value.
// In this example, the current theme is "dark".
static contextType = ThemeContext;
  render() {
    return <button>{this.context}</button>
  }
}

export default App;
