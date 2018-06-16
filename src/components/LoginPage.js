import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import '../static/css/user.css';

class Login extends Component {

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

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.doLogin(this.state);
  }
    
  


  render() {

    return (
      <div className="user-form">
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.username} name="username" onChange={this.getContent} />
        <input type="password" value={this.state.password} name="password" onChange={this.getContent} />
      
        <button type="submit" className="user-form-button">
          登录
        </button>
        <Link to="/reg">
          注册
        </Link>
        { this.props.user.doLogin ? "正在登陆" : "" }
        { this.props.user.loginSuccess ? '登陆成功' + this.props.user.token : "" }
        { this.props.user.loginError ? "登陆失败" : "" }
      </form>
        
      </div>
    );
  }
}
  
  export default Login;