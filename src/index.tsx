import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalFont from './styles/GlobalFont'
import GlobalStyled from './styles/GlobalStyled'
import App from './App'
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <GlobalFont />
    <GlobalStyled />
    <App />
  </React.StrictMode>
)
