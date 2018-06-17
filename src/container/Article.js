import { connect } from 'react-redux'
import { fetchArticle } from '../actions'
import ArticlePage from '../components/Article'


const mapStateToProps = (state, ownProps) => {
  return {
    articleList: state.article.articleList.filter((e,k) => k >= state.article.articleList.length-8),
    isFetching: state.article.isFetching
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getArticle: () => {
      dispatch(fetchArticle())
    }
  }
}

const Article = connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticlePage)

export default Article;