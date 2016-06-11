import React from 'react'

import './Tags.sass'
import squish from '../../utils/string/squish'
import removeExactWord from '../../utils/string/removeExactWord'

export default React.createClass({
  propTypes: {
    tags: React.PropTypes.array,
    centered: React.PropTypes.bool,
    query: React.PropTypes.string,
    setQuery: React.PropTypes.func
  },
  render: function () {
    const {tags} = this.props

    return <ul className={this.tagsClasses()}>
      {tags.sort().map(tag =>
        <li
          key={tag}
          className={this.tagClass(tag)}
          onClick={() => this.toggleQueryTag(tag)}
          >{tag}</li>
      )}
    </ul>
  },
  tagsClasses: function () {
    const rootClasses = 'tags list--unstyled row '
    if (this.props.centered) {
      return rootClasses + 'row--centered-items'
    } else {
      return rootClasses
    }
  },
  tagClass (tag) {
    if (this.tagIsInQuery(tag)) {
      return 'searching'
    } else if (this.tagPrefixIsInQuery(tag)) {
      return 'partial-match'
    } else {
      return ''
    }
  },
  toggleQueryTag: function (tag) {
    const { setQuery, query } = this.props
    let newQuery

    if (this.tagIsInQuery(tag)) {
      newQuery = removeExactWord(tag, query)
    } else {
      newQuery = query + ' ' + tag
    }

    newQuery = squish(newQuery)
    setQuery(newQuery)
  },
  tagPrefixIsInQuery (tag) {
    return this.tagWords(tag).some(tagWord => this.anyPrefixesOf(tagWord, this.queryWords()))
  },
  anyPrefixesOf (word, prefixArray) {
    return prefixArray.some(prefix => word.startsWith(prefix))
  },
  tagIsInQuery (tag) {
    return this.queryWords().includes(tag)
  },
  queryWords () {
    return this.props.query.split(' ').filter(word => word.length >= 2)
  },
  tagWords (tag) {
    return tag.substring(1).split('-').concat([tag])
  }
})
