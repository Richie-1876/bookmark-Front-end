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
      <div className="card">
      <h1>{this.props.bookmark.name}</h1>
      <a href={this.props.bookmark.link}><img src={this.props.bookmark.logo} alt=""/></a>
      <p>{this.props.bookmark.description}</p>
      <div className="buttons">
        <button>EDIT</button>
        <button onClick={()=> this.props.deleteBookmark(this.props.bookmark.id)}>DELETE</button>
      </div>
      </div>
    )
  }
}

// =============================
// EXPORT
// =============================
export default Bookmark
