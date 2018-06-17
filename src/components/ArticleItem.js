import React, {Component} from 'react';

const ArticleItem = ({title, author, time}) => (
  <div className="article-item">
    <div className="article-item-title">{title}</div>
    <div className="article-item-info">
      <span className="article-item-author">Author: {author}</span>
      <span className="article-item-time">{time}</span>
    </div>
  </div>

)


export default ArticleItem;