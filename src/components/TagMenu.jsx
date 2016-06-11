import React from 'react'

import Tags from './Item/Tags'
import uniq from '../utils/array/uniq'
import flatten from '../utils/array/flatten'

export default React.createClass({
  propTypes: {
    links: React.PropTypes.array,
    query: React.PropTypes.string,
    setQuery: React.PropTypes.func
  },
  render: function () {
    return <Tags
              tags={this.allTags()}
              centered={true}
              query={this.props.query}
              setQuery={this.props.setQuery}
              />
  },
  allTags: function () {
    return uniq(
      flatten(
        this.tagListsFromLinks()
      )
    )
  },
  tagListsFromLinks: function () {
    return this.props.links.map(function (link) { return link.tags })
  }
})
