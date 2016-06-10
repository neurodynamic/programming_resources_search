import React from 'react'

import Tags from './Tags'
import Icon from './Icon'

export default React.createClass({
  propTypes: {
    name: React.PropTypes.string,
    type: React.PropTypes.string,
    url: React.PropTypes.string,
    tags: React.PropTypes.array,
    setQuery: React.PropTypes.func
  },
  render: function () {
    const {name, type, url, tags, setQuery} = this.props

    return <li>
      <div className="type row row--sidelined-items row--collapsed">
        <Icon type={type} />
        <div>
          <div className="link">
            <a href={url} target="_blank">{name}</a>
          </div>
          <Tags {...this.props} />
        </div>
      </div>
    </li>
  },
  hashedTags: function (tags) {
    return tags.map(tag => '#' + tag)
  }
})