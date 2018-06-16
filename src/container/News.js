import { connect } from 'react-redux'
import { fetchNews } from '../actions'
import NewsPage from '../components/News'


const mapStateToProps = (state, ownProps) => {
  return {
    newsList: state.news.newsList.filter((e,k) => k >= state.news.newsList.length-4),
    isFetching: state.news.isFetching
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getNews: () => {
      dispatch(fetchNews())
    }
  }
}

const News = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsPage)

export default News;