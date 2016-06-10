import React from 'react'

export default React.createClass({
  propTypes: {
    query: React.PropTypes.string,
    setQuery: React.PropTypes.func
  },
  render: function () {
    const { query, setQuery } = this.props

    return <div className="row row--centered-items">
      <fieldset>
        <label htmlFor="search">Search</label>
        <input
          type="text"
          id="search"
          name="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          />
      </fieldset>
    </div>
  }
})
