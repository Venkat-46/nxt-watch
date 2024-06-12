import {withRouter, Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import {CgSun} from 'react-icons/cg'
import {FaMoon} from 'react-icons/fa'
import {FiLogOut} from 'react-icons/fi'
import {GiHamburgerMenu} from 'react-icons/gi'
import NxtContext from '../../context/NxtContext'
import {
  NavbarContainer,
  ControlsContainer,
  Button,
  MenuButton,
  LogoutButton,
  LogoutButtonLg,
  ModelContainer,
  ButtonsContainer,
} from './styledComponents'
import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props

    Cookies.remove('jwt_token')

    history.replace('/login')
  }

  return (
    <NxtContext.Consumer>
      {value => {
        const {isDark, changeTheme} = value

        const logoImg = isDark
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

        const themeLogo = isDark ? <CgSun /> : <FaMoon />

        const onChangeTheme = () => {
          changeTheme()
        }

        return (
          <NavbarContainer isDark={isDark}>
            <Link to="/">
              <img src={logoImg} alt="website-logo" className="logo-img" />
            </Link>
            <ControlsContainer isDark={isDark}>
              <Button type="button" onClick={onChangeTheme} isDark={isDark}>
                {themeLogo}
              </Button>
              <MenuButton type="button" isDark={isDark}>
                <GiHamburgerMenu />
              </MenuButton>
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
                className="profile-img"
              />

              <Popup
                modal
                trigger={
                  <LogoutButton
                    type="button"
                    isDark={isDark}
                    onClick={onClickLogout}
                  >
                    <FiLogOut />
                  </LogoutButton>
                }
              >
                {close => (
                  <ModelContainer>
                    <div>
                      <p>Are you sure, you want to logout?</p>
                    </div>
                    <ButtonsContainer>
                      <button
                        type="button"
                        className="cancel-button"
                        onClick={() => close()}
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        className="logout-button"
                        onClick={onClickLogout}
                      >
                        Confirm
                      </button>
                    </ButtonsContainer>
                  </ModelContainer>
                )}
              </Popup>
              <Popup
                modal
                trigger={
                  <LogoutButtonLg
                    type="button"
                    isDark={isDark}
                    onClick={onClickLogout}
                  >
                    Logout
                  </LogoutButtonLg>
                }
              >
                {close => (
                  <ModelContainer>
                    <div>
                      <p>Are you sure, you want to logout?</p>
                    </div>
                    <ButtonsContainer>
                      <button
                        type="button"
                        className="cancel-button"
                        onClick={() => close()}
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        className="logout-button"
                        onClick={onClickLogout}
                      >
                        Confirm
                      </button>
                    </ButtonsContainer>
                  </ModelContainer>
                )}
              </Popup>
            </ControlsContainer>
          </NavbarContainer>
        )
      }}
    </NxtContext.Consumer>
  )
}

export default withRouter(Header)

/*
<LogoutButton
                    type="button"
                    isDark={isDark}
                    onClick={onClickLogout}
                  >
                    <FiLogOut />
                  </LogoutButton>

<LogoutButtonLg
                    type="button"
                    isDark={isDark}
                    onClick={onClickLogout}
                  >
                    Logout
                  </LogoutButtonLg>
*/
