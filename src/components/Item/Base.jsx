import React from 'react'

import Tags from './Tags'
import Icon from './Icon'

export default React.createClass({
  propTypes: {
    name: React.PropTypes.string,
    type: React.PropTypes.string,
    url: React.PropTypes.string,
    tags: React.PropTypes.array
  },
  render: function () {
    const {name, type, url, tags} = this.props

    return <li>
      <div className="type row row--sidelined-items">
        <Icon type={type} />
        <div className="col">
          <div className="link">
            <a href={url}>{name}</a>
          </div>
          <Tags tags={tags} />
        </div>
      </div>
    </li>
  },
  hashedTags: function (tags) {
    return tags.map(tag => '#' + tag)
  }
})