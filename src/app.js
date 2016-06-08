import React from 'react'
import ReactDOM from 'react-dom'
import 'font-awesome-webpack'

import Main from './components/Main'
import './app.sass'
import links from './data/links'

ReactDOM.render(
  <Main links={links} />,
  document.getElementById('main-app')
)
