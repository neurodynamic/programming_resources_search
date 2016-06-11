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
    const { query } = this.state
    const links = this.normalizedLinks()

    return <main className='responsive-margin-container'>
      <h1>Programming Resources Search</h1>
      <Search
        query={query}
        setQuery={this.setQuery}
        />
      <TagMenu
        query={query}
        links={links}
        setQuery={this.setQuery}
        />
      <Results
        query={query}
        links={links}
        setQuery={this.setQuery}
        />
    </main>
  },
  setQuery: function (query) {
    this.setState({query: query})
  },
  normalizedLinks: function () {
    return this.props.links.map(this.normalizeLink)
  },
  normalizeLink (link) {
    const tagsAndType = link.tags.concat([link.type])
    link.tags = tagsAndType.map(this.taggify)
    return link
  },
  taggify (string) {
    return string
             .toLowerCase() // Should be all lower case
             .trim() // Should have no starting or trailing whitespace
             .replace(/\s+/, '-') // Should have hyphens instead of spaces
             .replace(/^#?/, '#') // Should start with hashtag
  }
})
