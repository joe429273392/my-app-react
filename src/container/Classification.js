import { connect } from 'react-redux'
import { fetchClassification } from '../actions'
import ClassificationPage from '../components/Classification'


const mapStateToProps = (state, ownProps) => {
  return {
    classificationList: state.classification.classificationList.filter((e,k) => k >= state.classification.classificationList.length-12),
    isFetching: state.classification.isFetching
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getClassification: () => {
      dispatch(fetchClassification())
    }
  }
}

const Classification = connect(
  mapStateToProps,
  mapDispatchToProps
)(ClassificationPage)

export default Classification;