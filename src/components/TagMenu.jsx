import React from 'react'

import Tags from './Item/Tags'

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
    return this.uniq(
      this.flatten(
        this.tagListsFromLinks()
      )
    )
  },
  tagListsFromLinks: function () {
    return this.props.links.map(function (link) { return link.tags })
  },
  flatten: function (array) {
    return [].concat.apply([], array)
  },
  uniq: function (array) {
    return Array.from(new Set(array))
  }
})