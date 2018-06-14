import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import '../static/css/User.css';

class Reg extends Component {
    constructor(props){
        super(props);
        //保存我们输入的这些记录
        this.state = {
            username : '',
            password : '',
            repeatPassword : ''
        };
    }
  
  
    getContent = (e) => {
      this.setState({
        [e.target.name] : e.target.value
      })
    }
  
    handleSubmit = async (e) => {
      if(this.state.username === "" || this.state.password === "") {
        return alert("输入不能为空");
      }
      else if(this.state.password !== this.state.repeatPassword) {
        return alert("两次密码输入不同");
      }else {
        fetch('http://localhost:4000/reg', {
          body: JSON.stringify(this.state),
          headers: {
            'Content-Type': 'application/json'
          },
          method: "POST",
          
        }).then(function(res) {
          return res.json();
        }).then(function(rs) {
          alert(rs.info);
        })
      }
      
    }
      
  
    render() {
  
      return (
        <div className="user-form">
          <input type="text" value={this.state.username} name="username" onChange={this.getContent} />
          <input type="password" value={this.state.password} name="password" onChange={this.getContent} />
          <input type="password" value={this.state.repeatPassword} name="repeatPassword" onChange={this.getContent} />
          <button type="button" onClick={this.handleSubmit} className="user-form-button">
            注册
          </button>
          <Link to="/login">
            登录
          </Link>
        </div>
      );
    }
  }
  
  export default Reg;