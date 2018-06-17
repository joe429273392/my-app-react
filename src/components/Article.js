import React, {Component} from 'react';
import ArticleItem from './ArticleItem';

class Article extends Component {

  componentWillMount() {
    this.props.getArticle();
  }

  render() {
    let articleList = this.props.articleList;
    return <div className="article">
      <h4 className="main-subtitle"><span className="red-line"></span> Article</h4>
      {
        articleList.map((articleItem, index) => (
          <ArticleItem key={index} {...articleItem}/>
        ))
        
      }
    </div>
  }
}

export default Article;