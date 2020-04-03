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
        <div className="card-header">
          <h1>{this.props.bookmark.name}</h1>
        </div>
        <div className="card-body">
          <a href={this.props.bookmark.link} target="_blank"><img src={this.props.bookmark.logo} alt=""/></a>
        </div>
        <div className="card-text">
          <p>{this.props.bookmark.description}</p>
        </div>
        <div className="button-group">
          <button className="btn btn-warning"onClick={()=>{this.toggleUpdateForm()}}>Update</button>

            <button className="btn btn-danger"onClick={()=> this.props.deleteBookmark(this.props.bookmark.id)}>DELETE</button>
        </div>
        {
                 this.state.showUpdate
                 ? <UpdateForm toggleUpdateForm={this.toggleUpdateForm}
                 bookmark={this.props.bookmark}
                 updateBookmark={this.props.updateBookmark}
                 bookmarks={this.props.bookmarks}/>
                 : null
        }
      </div>
    )
  }
}

// =============================
// EXPORT
// =============================
export default Bookmark
