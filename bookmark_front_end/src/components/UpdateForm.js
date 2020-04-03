import React, { Component } from 'react'


export default class UpdateForm extends Component{
  constructor(props){
    super(props)
    this.state = {
      bookmarks: this.props.bookmarks,
      name: this.props.bookmark.name,
      logo: this.props.bookmark.logo,
      description: this.props.bookmark.description,
      link: this.props.bookmark.link
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }

  handleChange(e){
    this.setState({[e.target.id]: e.target.value})
  }
async  handleSubmit(bookmark){
    try {
      let response = await fetch(`http://localhost:3000/bookmarks/${bookmark.id}`, {
        method:'PUT',
        body: JSON.stringify({
          name: this.state.name,
          logo: this.state.logo,
          description: this.state.description,
          link: this.state.link
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      let data = await response.json()
      console.log(data);
      const foundBookmark = this.state.bookmarks.findIndex(foundItem => (foundItem.id === bookmark.id))
      const copyBookmarks = [...this.props.bookmarks]
      copyBookmarks[foundBookmark].name = data.name
      copyBookmarks[foundBookmark].logo = data.logo
      copyBookmarks[foundBookmark].description = data.description
      copyBookmarks[foundBookmark].link = data.link
      this.props.updateBookmark(copyBookmarks)
      this.props.toggleUpdateForm()
    } catch (e) {
      console.error('Error',e)
    }
  }


  render() {
    return (
      <>
      <form onSubmit={(e)=>{
        e.preventDefault()
        this.handleSubmit(this.props.bookmark)
      }}>
      <div className="form-group">

        <div className="form-row">
          <input className="form-control" type='text' id='name' value={this.state.name} onChange={this.handleChange}/>
        </div>

        <div className="form-row">
        <input className="form-control" type='text' id='logo' value={this.state.logo} onChange={this.handleChange}/>
        </div>

        <div className="form-row">
        <textarea className="form-control" rows='4' cols='50' id='description' value={this.state.description} onChange={this.handleChange}></textarea>
        </div>

        <div className="form-row">
        <input className="form-control" type='text' id='link' value={this.state.link} onChange={this.handleChange}/>
        </div>

        <input className="form-control btn btn-outline-success" type="submit"/>
      </div>

      </form>
      </>
    )
  }
}
