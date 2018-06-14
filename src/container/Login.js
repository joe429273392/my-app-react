import { connect } from 'react-redux'
import { fetchLogin } from '../actions'
import LoginPage from '../components/LoginPage'


const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    doLogin: (state) => {
      dispatch(fetchLogin(state))
    }
  }
}

const Login = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage)

export default Login