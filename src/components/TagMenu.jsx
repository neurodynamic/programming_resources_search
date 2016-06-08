import React from 'react'

import Tags from './Item/Tags'

export default React.createClass({
  propTypes: {
    links: React.PropTypes.array
  },
  render: function () {
    return <Tags tags={this.allTags()} />
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