import React from 'react'
import ReactDOM from 'react-dom'

import Main from './components/Main'
import './app.sass'
import links from './data/links'
import './googleAnalytics'

ReactDOM.render(
  <Main links={links} />,
  document.getElementById('main-app')
)
