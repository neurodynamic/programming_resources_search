import React from 'react'

import Item from './Item/Base'
import './Results.sass'
import flatten from '../utils/array/flatten'

export default React.createClass({
  propTypes: {
    links: React.PropTypes.array,
    query: React.PropTypes.string,
    setQuery: React.PropTypes.func
  },
  render: function () {
    const { query, setQuery } = this.props
    return <div className='row row--centered-items'>
      <section className='results'>
        <div className='row row--centered-items'>
          <h2>Matching Resources</h2>
        </div>
        <div className='row row--centered-items'>
          <ul className='listings list--unstyled col column--left-aligned'>
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
      </section>
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
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1))
      let temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }
    return array
  },
  isMatch: function (link) {
    const queryWords = this.props.query.split(' ')
    const linkParts = this.linkMatchableParts
    return queryWords.every(function (queryWord) {
      return linkParts(link).some(function (potentialMatch) {
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
    return flatten(wordsInEachTag)
  },
  tagToWords (tag) {
    return tag.replace('#', '').split('-')
  }
})
