import React from 'react'

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
      <a href={url}>{name}</a>
    </li>
  }
})