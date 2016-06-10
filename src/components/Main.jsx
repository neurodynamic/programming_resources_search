import React from 'react'

import Search from './Search'
import Results from './Results'
import TagMenu from './TagMenu'

export default React.createClass({
  propTypes: {
    links: React.PropTypes.array
  },
  getInitialState: function () {
    return {
      query: ''
    }
  },
  render: function () {
    const { query, links } = this.state
    return <main className="responsive-margin-container">
      <h1>Coding Resources Search</h1>
      <Search
        query={query}
        setQuery={this.setQuery}
        />
      <TagMenu 
        links={this.props.links}
        query={query}
        setQuery={this.setQuery}
        />
      <Results
        query={query}
        links={this.props.links}
        setQuery={this.setQuery}
        />
    </main>
  },
  setQuery: function (query) {
    this.setState({query: query})
  }
})
