import React from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'

class ListBooks extends React.Component {
  render() {
    const { books, moveTo } = this.props
    const currentlyReadingBooks = books.filter(book => book.shelf === 'currentlyReading')
    const wantToReadBooks = books.filter(book => book.shelf === 'wantToRead')
    const readBooks = books.filter(book => book.shelf === 'read')
    return (
      <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {currentlyReadingBooks.map(book => (
                        <Book
                          key={book.id}
                          book={book}
                          moveTo={moveTo} />
                      ))}
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {wantToReadBooks.map(book => (
                        <Book
                          key={book.id}
                          book={book}
                          moveTo={moveTo} />
                      ))}
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {readBooks.map(book => (
                        <Book
                          key={book.id}
                          book={book}
                          moveTo={moveTo} />
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="open-search">
              <Link to='/search'>Add a book</Link>
            </div>
          </div>
    )
  }
}

export default ListBooks
