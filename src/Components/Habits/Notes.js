import { Component } from 'react'

class Notes extends Component {
  constructor() {
    super()
    this.state = {
     newNote: '',
     noteList: []
    }
    this.handleChange = this.handleChange.bind(this)
  }

  saveNote() {
    const newNote = {
      value: this.state.noteList.slice(),
    }
    const noteList = [...this.state.noteList]
    noteList.push(newNote)

    this.setState({
      noteList,
      newNote: '',
    })
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target
    type === 'checkbox'
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value })
  }

  updateNote(body) {
    this.setState({ body })
  }

  render() {
    return (
      <div>
        <form>
          <textarea
            type="text"
            placeholder="How am I feeling?"
            value={this.state.note}
            onChange={(event) => this.updateNote(event.target.value)}
          ></textarea>
          <button onClick={() => this.saveNote()}>Save</button>
          {/* <ul>
            {this.state.noteList.map((item) => {
              return <ul key={item.id}>{item.value}</ul>
            })}
          </ul> */}
        </form>
      </div>
    )
  }
}

export default Notes
