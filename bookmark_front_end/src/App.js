import React from 'react';
import Bookmark from './components/Bookmark.js'
import Newform from './components/Newform.js'
import './App.css';

class App extends React.Component {
  constructor(props) {
  super(props)
  this.state = {
    bookmarks: [],
    newBookmark: false
  }
  this.handleAddBookmark = this.handleAddBookmark.bind(this)
  this.deleteBookmark = this.deleteBookmark.bind(this)
  this.updateBookmark = this.updateBookmark.bind(this)
}
handleAddBookmark(bookmark){
  const copyBookmarks = [bookmark, ...this.state.bookmarks]
  this.setState({
    bookmarks: copyBookmarks
  })
}
updateBookmark(copyBookmarks){
  this.setState({
    bookmarks: copyBookmarks
  })
}
toggleNewForm(){
  this.setState({
    newBookmark: !this.state.newBookmark
  })
}
fetchBookmarks = async () => {
    let response = await fetch('http://localhost:3000/bookmarks')
    let data = await response.json()
    console.log(data)
    this.setState({ bookmarks: data })
  }

  async deleteBookmark(id){
    try {
      let response = await fetch(`http://localhost:3000/bookmarks/${id}`, {
        method: "DELETE"
      })
      this.setState(prevState => {
          const bookmarks = prevState.bookmarks.filter(bookmark => bookmark.id !== id)
          return { bookmarks }
        })
    } catch (e) {
      console.error(e)
    }
  }
  componentDidMount() {
    this.fetchBookmarks()
  }

render() {
  return (
    <div>
    <button onClick={()=>{this.toggleNewForm()}}>Add new Bookmark</button>
    {
             this.state.newBookmark
             ? <Newform toggleNewForm={this.toggleNewForm}  handleAddBookmark={this.handleAddBookmark}/>
             : null
    }
    <div>
      {this.state.bookmarks.map(bookmark =>
        <Bookmark bookmark={bookmark} deleteBookmark={this.deleteBookmark}
        updateBookmark={this.updateBookmark}
        bookmarks={this.state.bookmarks}/>
      )}
      </div>
    </div>
  )
}
}


export default App;
