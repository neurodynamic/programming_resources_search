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
      return this.shuffleArray(this.props.links)
    } else {
      const isMatch = this.isMatch
      return this.props.links.filter(function (link) {
        return isMatch(link)
      })
    }
  },
  shuffleArray: function (array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
  },
  isMatch: function (link) {
    const queryWords = this.props.query.split(' ')
    const linkParts = this.linkMatchableParts
    return queryWords.every(function (queryWord) {
      return linkParts(link).find(function (potentialMatch) {
        return potentialMatch.toLowerCase()
                .startsWith(queryWord.toLowerCase())
      })
    })
  },
  linkMatchableParts: function (link) {
    const nameParts = link.name.split(' ')
    const hashlessTags = link.tags.map(function (tag) { return tag.replace('#','') })
    return nameParts.concat(link.tags).concat(hashlessTags)
  }
})
