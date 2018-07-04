import React from 'react'
import Select from './Select'

const Book = (props) => {
  let backgroundImage
  if (props.book.imageLinks) {
    backgroundImage = `url(${props.book.imageLinks.thumbnail})`
  } else {
    backgroundImage = 'url(http://via.placeholder.com/128x193?text=no%20image)'
  }
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `${backgroundImage}`}}></div>
          <div className="book-shelf-changer">
            <Select book={props.book} moveTo={props.moveTo} />
          </div>
        </div>
        <div className="book-title">{props.book.title}</div>
        <div className="book-authors">{props.book.author && props.book.authors.join(', ')}</div>
      </div>
    </li>
  )
}

export default Book
