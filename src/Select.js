import React from 'react'

class Select extends React.Component {
  state = {
    selected: ''
  }

  componentDidMount() {
    this.setState({ selected: this.props.book.shelf ? this.props.book.shelf : 'none'})
  }

  handleSelect = (e) => {
    const { value } = e.target
    this.props.moveTo(this.props.book, value)
  }

  render() {
    return (
      <select value={this.state.selected} onChange={this.handleSelect}>
        <option value="move" disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    )
  }
}

export default Select