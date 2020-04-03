// =============================
// DEPENDENCIES
// =============================
// packages
import React from 'react'
import UpdateForm from './UpdateForm.js'
// =============================
// COMPONENT CLASS
// =============================
class Bookmark extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      showUpdate: false
    }
    this.toggleUpdateForm = this.toggleUpdateForm.bind(this)
  }
  toggleUpdateForm(){
    this.setState({
      showUpdate: !this.state.showUpdate
    })
  }

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
      <button onClick={()=>{this.toggleUpdateForm()}}>Update Bookmark</button>
      {
               this.state.showUpdate
               ? <UpdateForm toggleUpdateForm={this.toggleUpdateForm}
               bookmark={this.props.bookmark}
               updateBookmark={this.props.updateBookmark}
               bookmarks={this.props.bookmarks}/>
               : null
      }
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
