import React from 'react'

import Item from './Item/Base'
import './Results.sass'

export default React.createClass({
  propTypes: {
    links: React.PropTypes.array,
    query: React.PropTypes.string,
    setQuery: React.PropTypes.func
  },
  render: function () {
    const { query, setQuery } = this.props
    return <div className="row row--centered-items">
      <ul className="results list--unstyled col column--left-aligned">
        {this.results().map(link =>
          <Item
            {...link}
            query={query}
            setQuery={setQuery}
            key={link.name}
            />
        )}
      </ul>
    </div>
  },
  results: function () {
    if (this.props.query === '') {
      return this.props.links
    } else {
      const isMatch = this.isMatch
      return this.props.links.filter(function (link) {
        return isMatch(link)
      })
    }
  },
  isMatch: function (link) {
    const queryWords = this.props.query.split(' ')
    const linkParts = this.linkMatchableParts
    return queryWords.every(function (word) {
      return linkParts(link).find(function (potentialMatch) {
        return potentialMatch.toLowerCase()
                .startsWith(word.toLowerCase())
      })
    })
  },
  linkMatchableParts: function (link) {
    const nameParts = link.name.split(' ')
    return nameParts.concat(link.tags)
  }
})
