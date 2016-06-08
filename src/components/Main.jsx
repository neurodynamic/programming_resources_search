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
    return <main>
      <Search
        query={this.state.query}
        setQuery={this.setQuery}
        />
      <TagMenu links={this.props.links} />
      <Results
        query={this.state.query}
        links={this.props.links}
        />
    </main>
  },
  setQuery: function (query) {
    this.setState({query: query})
  }
})
