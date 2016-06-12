import React from 'react'

import './Search.sass'

export default React.createClass({
  propTypes: {
    query: React.PropTypes.string,
    setQuery: React.PropTypes.func
  },
  render: function () {
    const { query, setQuery } = this.props

    return <div className='row row--centered-items'>
      <form className='search-form'>
          <label htmlFor='search'>Search</label>
          <input
            type='text'
            id='search'
            name='search'
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            />
      </form>
    </div>
  }
})
