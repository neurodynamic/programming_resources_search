import React from 'react'

export default React.createClass({
  propTypes: {
    tags: React.PropTypes.array
  },
  render: function () {
    const {name, type, url, tags} = this.props

    return <div className="type-icon">
      <i className={this.iconClass()}></i>
      <legend>{type}</legend>
    </div>
  },
  iconClass: function () {
    const iconClassStart = "fa fa-"
    switch (this.props.type) {
      case "code example":
        return iconClassStart + "code"
      case "tutorial":
        return iconClassStart + "list-ol"
      case "video":
        return iconClassStart + "youtube-play"
      case "blog post":
        return iconClassStart + "rss"
      case "cheatsheet":
        return iconClassStart + "list-alt"

    }
    return this.props.tags.map(tag => '#' + tag)
  }
})