import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import SearchBooks from './SearchBooks'
import ListBooks from './ListBooks'
import './App.css'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books })
    })
  }

  updateShelf = (book, value) => {
    BooksAPI.update(book, value).then(() => {
      BooksAPI.getAll().then(books => {
        this.setState({ books })
      })
    })
  }

  render() {
    const { books } = this.state
    return (
      <div className="app">
        <Route path='/search' render={() => (
          <SearchBooks
            moveTo={(book, value) => this.updateShelf(book, value)}
            books={books} />
        )}  />
        <Route exact path='/' render={() => (
          <ListBooks
            moveTo={(book, value) => this.updateShelf(book, value)}
            books={books} />
        )} />
      </div>
    )
  }
}

export default BooksApp
