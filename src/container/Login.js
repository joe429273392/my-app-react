import { connect } from 'react-redux'
import { doLogin } from '../actions'
import LoginPage from '../components/LoginPage'

const mapStateToProps = (state, ownProps) => {
  return {
    active : 1
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    doLogin: async (state) => {
      dispatch(doLogin(state.username));
      // fetch('http://localhost:4000/login', {
      //   body: JSON.stringify(state),
      //   headers: {
      //     'Content-Type': 'application/json'
      //   },
      //   method: "POST",
      // }).then(function(res) {
      //   return res.json();
      // }).then(function(rs) {
      //   alert(rs.info);
      // })
    }
  }
}

const Login = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage)

export default Login