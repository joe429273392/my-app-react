import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor(props){
      super(props);
      //保存我们输入的这些记录
      this.state = {
          username : '',
          password : '',
      };
  }


  getContent = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  handleSubmit = async (e) => {
    const { userName,password } = this.state;
    fetch('http://localhost:4000/login', {
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json'
      },
      method: "POST",
      
    }).then(function(res) {
      return res.json();
    }).then(function(rs) {
      console.log(rs);
    })

  }
    
  


  render() {

    return (
      <div className="App">
        
        <input type="text" value={this.state.username} name="username" onChange={this.getContent} />
        <input type="password" value={this.state.password} name="password" onChange={this.getContent} />
      
        <button type="button" onClick={this.handleSubmit} className="login-form-button">
          登录
        </button>

      </div>
        

    );
  }
}

export default App;
