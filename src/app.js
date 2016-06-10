import React from 'react'
import ReactDOM from 'react-dom'

import Main from './components/Main'
import './app.sass'
import links from './data/links'

ReactDOM.render(
  <Main links={links.sort(linkCompare)} />,
  document.getElementById('main-app')
)
