import React, { Component } from 'react'


export default class Newform extends Component{
  constructor(props){
    super(props)
    this.state = {
      name: '',
      logo: '',
      description: '',
      link: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }

  handleChange(e){
    this.setState({[e.target.id]: e.target.value})
  }
async  handleSubmit(e){
    e.preventDefault()
    try {
      let response = await fetch(`http://localhost:3000/bookmarks`, {
        method:'POST',
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
      this.props.handleAddBookmark(data)
      this.props.toggleNewForm()
      this.state({
        name: '',
        logo: '',
        description: '',
        link: ''
      })
    } catch (e) {
      console.error('Error',e)
    }
  }


  render() {
    return (
      <>
      <form onSubmit={this.handleSubmit}>
        <input type='text' id='name' placeholder='name'onChange={this.handleChange}/>

        <input type='text' id='logo'placeholder='logo'onChange={this.handleChange}/>

        <textarea rows='4' cols='50' id='description'placeholder='description'onChange={this.handleChange}></textarea>

        <input type='text' id='link'placeholder='url'onChange={this.handleChange}/>

        <input type="submit"/>


      </form>
      </>
    )
  }
}
