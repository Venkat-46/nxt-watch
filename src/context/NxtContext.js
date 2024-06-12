import React from 'react'

const NxtContext = React.createContext({
  isDark: false,
  changeTheme: () => {},
})

export default NxtContext
