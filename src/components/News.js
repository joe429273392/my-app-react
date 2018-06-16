import React, {Component} from 'react';
import NewsItem from './NewsItem';

class News extends Component {

  componentWillMount() {
    this.props.getNews();
  }

  render() {
    let newsList = this.props.newsList;
    return <div className="news">
      <h4 className="main-subtitle"><div className="red-line"></div> News</h4>
      {
        newsList.map((newsItem, index) => (
          <NewsItem key={index} {...newsItem}/>
        ))
        
      }
    </div>
  }
}

export default News;