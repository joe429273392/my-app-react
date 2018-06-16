import React, {Component} from 'react';

const NewsItem = ({image, title, content}) => (
  <div className="news-item">
    <div className="news-item-img" > news img </div>
    <div className="news-item-content">
      <h5 className="news-item-title">{title}</h5>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{content}</p>
    </div>
    
  </div>

)


export default NewsItem;