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
      <div className="type row row--sidelined-items">
        
      </div>
      <div className="link">
        <a href={url}>{name}</a>
      </div>
      <ul className="tags list--unstyled">
        {this.hashedTags(tags).map(tag =>
          <li key={tag}>{tag}</li>
        )}
      </ul>
    </li>
  },
  hashedTags: function (tags) {
    return tags.map(tag => '#' + tag)
  }
})