import React from 'react'

export default React.createClass({
  propTypes: {
    tags: React.PropTypes.array
  },
  render: function () {
    const {name, type, url, tags} = this.props

    return <ul className="tags list--unstyled row row--centered-items">
      {tags.sort().map(tag =>
        <li key={tag}>#{tag}</li>
      )}
    </ul>
  }
})