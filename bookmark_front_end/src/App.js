import React from 'react';
import Bookmark from './components/Bookmark.js'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props) {
  super(props)
  this.state = {
    bookmarks: []
  }
}
fetchBookmarks = async () => {
    let response = await fetch('http://localhost:3000/bookmarks')
    let data = await response.json()
    console.log(data)
    this.setState({ bookmarks: data })
  }
  componentDidMount() {
    this.fetchBookmarks()
  }

render() {
  return (
    <div>
      {this.state.bookmarks.map(bookmark =>
        <Bookmark bookmark={bookmark}/>
      )}
    </div>
  )
}
}


export default App;
