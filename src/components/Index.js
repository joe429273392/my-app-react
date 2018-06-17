import React, {Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import News from '../container/News';
import Article from '../container/Article';
import Classification from '../container/Classification';
import { Link } from 'react-router-dom';
import '../static/css/index.css'

class Index extends Component {
    constructor(props){
      super(props);
    }
  
    render() {
      return (
        <div className="main">
        <Header />
          <div className="main-container">
            <News />
            <div className="main-content">
              <Article />
              <Classification />
            </div>
          </div>
          <Footer />
        </div>
      );
    }
  }
  
  export default Index;