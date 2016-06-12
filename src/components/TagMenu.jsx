import React from 'react'

import Tags from './Item/Tags'
import uniq from '../utils/array/uniq'
import flatten from '../utils/array/flatten'
import './TagMenu.sass'

export default React.createClass({
  propTypes: {
    links: React.PropTypes.array,
    query: React.PropTypes.string,
    setQuery: React.PropTypes.func
  },
  render: function () {
    return <section className='tag-menu'>
      <h2>Tags</h2>
      <p>click or tap tags to select them</p>
      <Tags
        tags={this.allTags()}
        centered
        query={this.props.query}
        setQuery={this.props.setQuery}
        />
    </section>
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
