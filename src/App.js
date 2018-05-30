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

  handleLoginClick = async () => {
    // const that = this;

    // const body = { ...that.state };
    // const rs = await fetch('http://localhost:4000/login', {
    //   header: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(body),
    //   "method": "POST",
    // })

    // const res = await rs.json();
    // console.log(res);

    

    fetch('http://localhost:4000/login', {
      body: JSON.stringify({
        "userName": "tom",
        "name": "tom",
        "identity": "teacher",
        "isSelected": false
      }),
      header: {
        "content-type": "application/json",
      },
      method: "POST",
    }).then(function(req) {
      return req.json();
    }).then(function(rs) {
      console.log(rs);
    })
  }

  render() {
    console.log(this.state.nowContent);
    return (
      <div className="App">
        <div className="App">
            <input type="text" name="username" value={this.state.username} onChange={this.getContent} />
            <input type="password" name="password" value={this.state.password} onChange={this.getContent} />
            <button type="button" onClick={this.handleLoginClick} >登录</button>
        </div>
      </div>
        

    );
  }
}

export default App;
