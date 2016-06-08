import React from 'react'

export default React.createClass({
  propTypes: {
    children: React.PropTypes.object
  },
  render: function () {
    return <div className="row row--centered-items">
      <fieldset>
        <label htmlFor="search">Search</label>
        <input type="text" id="search" name="search" />
      </fieldset>
    </div>
  }
})
