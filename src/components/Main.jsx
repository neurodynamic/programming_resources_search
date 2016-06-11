import React from 'react'

import Search from './Search'
import Results from './Results'
import TagMenu from './TagMenu'
import uniq from '../utils/array/uniq'

export default React.createClass({
  propTypes: {
    links: React.PropTypes.array
  },
  getInitialState: function () {
    return {
      query: ''
    }
  },
  render: function () {
    const { query } = this.state
    const links = this.normalizedLinks()

    return <div>
      <main className='responsive-margin-container'>
        <h1>Programming Resources Search</h1>

        <div className='row row--centered-items row--collapsed'>
          <a className='submit-a-link' href='https://github.com/neurodynamic/programming_resources_search/issues/new?title=Link+suggestion&body=Paste+your+link+suggestion(s)+in+this+box,+then+click+the+%22Submit+new+issue%22+button.%0A%0A&labels=enhancement'>
            <strong>submit a link</strong>
          </a>
        </div>
        <Search
          query={query}
          setQuery={this.setQuery}
          />
        <TagMenu
          query={query}
          links={links}
          setQuery={this.setQuery}
          />
        <Results
          query={query}
          links={links}
          setQuery={this.setQuery}
          />

        <div className='github-link row row--centered-items'>
          <a href='https://github.com/neurodynamic/programming_resources_search'>
            <div>
              <i className='fa fa-github-alt'></i>
            </div>
            <div>
              Programming Resources Search source code on GitHub
            </div>
          </a>
        </div>
      </main>
    </div>
  },
  setQuery: function (query) {
    this.setState({query: query})
  },
  normalizedLinks: function () {
    return this.props.links.map(this.normalizeLink)
  },
  normalizeLink (link) {
    const tagsAndType = link.tags.concat([link.type])
    link.tags = uniq(tagsAndType.map(this.taggify))
    return link
  },
  taggify (string) {
    return string
             .toLowerCase() // Should be all lower case
             .trim() // Should have no starting or trailing whitespace
             .replace(/\s+/, '-') // Should have hyphens instead of spaces
             .replace(/^#?/, '#') // Should start with hashtag
  }
})
