import React, {Component} from 'react';
import Search from '../container/Search';

class Header extends Component {

  render() {
    return <div className="header">
      <div className="header-title">
        <h2>Tom Went Hey's BLOG</h2>
        <p>stay hungry, stay foolish</p>
      </div>
      <Search />
    </div>
  }
}

export default Header;