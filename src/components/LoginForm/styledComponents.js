import styled from 'styled-components'

export const MainLoginContainer = styled.div`
  height: 100vh;
  background-color: ${props => (props.isDark ? '#181818' : '#f9f9f9')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const LoginSection = styled.div`
  width: 90%;
  background-color: ${props => (props.isDark ? 'black' : '#f9f9f9')};
  color: ${props => (props.isDark ? 'white' : 'black')};
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  padding: 30px;
  box-shadow: 0px 4px 16px 0px #bfbfbf;
  @media screen and (min-width: 768px) {
    width: 32%;
  }
`

export const Input = styled.input`
  background: transparent;
  color: ${props => (props.isDark ? 'white' : 'black')};
  height: 45px;
  outline: none;
  border: 1px solid gray;
  border-radius: 5px;
  padding-left: 15px;
`
