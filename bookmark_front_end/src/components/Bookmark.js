// =============================
// DEPENDENCIES
// =============================
// packages
import React from 'react'

// =============================
// COMPONENT CLASS
// =============================
class Bookmark extends React.Component {
  // ==============
  // RENDER
  // ==============
  render () {
    return (
      <div>
      <h1>{this.props.bookmark.name}</h1>
      <a href={this.props.bookmark.link}><img src={this.props.bookmark.logo} alt=""/></a>
      <p>{this.props.bookmark.description}</p>
      </div>
    )
  }
}

// =============================
// EXPORT
// =============================
export default Bookmark
