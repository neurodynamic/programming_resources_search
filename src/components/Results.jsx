import React from 'react'

import Item from './Item/Base'
import './Results.sass'
import flatten2d from '../utils/array/flatten2d'

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
      const results = this.props.links.filter(function (link) {
        return isMatch(link)
      })
      return results.sort(this.linkCompare)
    }
  },
  linkCompare: function (a, b) {
    if (a.name.toLowerCase() > b.name.toLowerCase()) {
      return 1
    } else {
      return -1
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
    return nameParts.concat(link.tags).concat(this.wordsInTags(link))
  },
  wordsInTags: function (link) {
    const wordsInEachTag = link.tags.map(this.tagToWords)
    return flatten2d(wordsInEachTag)
  },
  tagToWords (tag) {
    return tag.replace('#', '').replace('-', ' ').split(' ')
  }
})
