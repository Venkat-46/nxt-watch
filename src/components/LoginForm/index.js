import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import NxtContext from '../../context/NxtContext'
import {MainLoginContainer, LoginSection, Input} from './styledComponents'
import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    errorMsg: '',
    isError: false,
    showPassword: 'password',
  }

  loginSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  loginFailure = errorMsg => {
    this.setState({isError: true, errorMsg})
  }

  onClickLogin = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {
      username,
      password,
    }
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const loginUrl = 'https://apis.ccbp.in/login'
    const response = await fetch(loginUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      this.loginSuccess(data.jwt_token)
    } else {
      this.loginFailure(data.error_msg)
    }
  }

  onClickShowPassword = () => {
    const {showPassword} = this.state

    if (showPassword === 'password') {
      this.setState({showPassword: 'text'})
    } else {
      this.setState({showPassword: 'password'})
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {showPassword, username, password, isError, errorMsg} = this.state

    return (
      <NxtContext.Consumer>
        {value => {
          const {isDark} = value
          const appLogoImg = isDark
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          const token = Cookies.get('jwt_token')

          if (token !== undefined) {
            return <Redirect to="/" />
          }

          return (
            <MainLoginContainer isDark={isDark}>
              <LoginSection isDark={isDark} className="login-section">
                <img
                  src={appLogoImg}
                  alt="website logo"
                  className="website-login-logo"
                />
                <form
                  onSubmit={this.onClickLogin}
                  className="login-form-container"
                >
                  <div className="input-container">
                    <label htmlFor="username" className="label">
                      Username
                    </label>
                    <Input
                      isDark={isDark}
                      id="username"
                      value={username}
                      type="text"
                      placeholder="Username"
                      onChange={this.onChangeUsername}
                    />
                  </div>
                  <div className="input-container">
                    <label htmlFor="password" className="label">
                      Password
                    </label>
                    <Input
                      isDark={isDark}
                      id="password"
                      value={password}
                      type={showPassword}
                      placeholder="Password"
                      onChange={this.onChangePassword}
                    />
                    <div className="check-box-container">
                      <input
                        id="showPassword"
                        type="checkbox"
                        onChange={this.onClickShowPassword}
                      />
                      <label htmlFor="showPassword">Show Password</label>
                    </div>
                  </div>
                  <button type="submit" className="submit-button">
                    Login
                  </button>
                </form>
                {isError && <p className="error-msg">*{errorMsg}</p>}
              </LoginSection>
            </MainLoginContainer>
          )
        }}
      </NxtContext.Consumer>
    )
  }
}

export default LoginForm
