import React from 'react'
import ReactDOM from 'react-dom'

import Main from './components/Main'
import './app.sass'
import links from './data/links'
import './googleAnalytics'
import 'file?name=favicon.ico!../favicon.ico'

ReactDOM.render(
  <Main links={links} />,
  document.getElementById('main-app')
)
