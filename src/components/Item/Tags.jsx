import React from 'react'

import './Tags.sass'

export default React.createClass({
  propTypes: {
    tags: React.PropTypes.array,
    centered: React.PropTypes.bool,
    query: React.PropTypes.string,
    setQuery: React.PropTypes.func
  },
  render: function () {
    const {name, type, url, tags} = this.props

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
    const rootClasses = "tags list--unstyled row "
    if (this.props.centered) {
      return rootClasses + "row--centered-items"
    } else {
      return rootClasses
    }
  },
  tagClass(tag) {
    if (this.props.query.includes(tag)) {
      return 'searching'
    } else {
      return ''
    }
  },
  toggleQueryTag: function (tag) {
    const { setQuery, query } = this.props
    let newQuery

    if (query.includes(tag)) {
      newQuery = query.replace(tag,'')
    } else {
      newQuery = query + ' ' + tag
    }

    const squishedQuery = this.squish(newQuery)
    setQuery(squishedQuery)
  },
  squish: function(string) {
    return string.replace(/\s{2,}/,' ').trim()
  }
})