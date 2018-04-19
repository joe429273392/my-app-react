import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
constructor(props){
    super(props);
    //保存我们输入的这些记录
    this.state = {
        lists:['真的很ok','我觉得ok','ojbk'],
        nowContent:'',
    };
    
    this.getInputContent = this.getInputContent.bind(this);
    this.handleClick = this.handleClick.bind(this);
}

getInputContent(event){
  this.setState({nowContent:event.target.value})
}

handleClick(event){
  let lists = this.state.lists;

  lists.push(this.state.nowContent);
  this.setState({
    lists: lists,
  })
}

  render() {
    console.log(this.state.nowContent);
    return (
        <div className="App">
            <input placeholder="输入..." type="text" value={this.state.nowContent} 
              onChange={this.getInputContent} />
            <button className="btn" onClick={this.handleClick} type="button">确认</button>

            <div className="displayBox">
            {
              this.state.lists.map(item => (
                <div className="items"><p key={item}>{item}</p></div>
              ))
            }
            </div>
        </div>

    );
  }
}

export default App;
