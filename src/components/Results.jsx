import React from 'react'

export default React.createClass({
  propTypes: {
    links: React.PropTypes.array,
    query: React.PropTypes.string
  },
  render: function () {
    return <div className="row row--centered-items">
      <ul>
        {this.props.links.map(link =>
          <li key={link.name}>
            <a href={link.url}>{link.name}</a>
          </li>
        )}
      </ul>
    </div>
  }
})
