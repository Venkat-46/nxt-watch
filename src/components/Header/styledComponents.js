import styled from 'styled-components'

export const NavbarContainer = styled.nav`
  background-color: ${props => (props.isDark ? 'black' : 'white')};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
`

export const ControlsContainer = styled.nav`
  color: ${props => (props.isDark ? 'black' : 'white')};
  display: flex;
  align-items: center;
`

export const Button = styled.button`
  color: ${props => (props.isDark ? 'white' : 'black')};
  font-size: 20px;
  outline: none;
  border: none;
  background: none;
  cursor: pointer;
  margin-right: 5px;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`

export const MenuButton = styled(Button)`
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const LogoutButton = styled(Button)`
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const LogoutButtonLg = styled.button`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    color: ${props => (props.isDark ? 'white' : '#3b82f6')};
    font-size: 16px;
    font-weight: 600;
    outline: none;
    border-color: ${props => (props.isDark ? 'white' : '#3b82f6')};
    border-width: 1px;
    border-style: solid;
    border-radius: 4px;
    background: none;
    cursor: pointer;
    margin-left: 7px;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-right: 10px;
    padding-left: 10px;
  }
`

export const ModelContainer = styled.nav`
  width: 310px;
  color: white;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 5px;
  padding-bottom: 20px;
  background-color: #383838;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
`

export const ButtonsContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`
