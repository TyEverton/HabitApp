import { Component } from 'react'
import './notes.css'

class Notes extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newNote: '',
      noteList: [],
      currentDate: Date(),
    }
  }

  addNote() {
    const newNote = {
      id: 1 + Math.random(),
      value: this.state.newNote.slice(),
    }
    const noteList = [...this.state.noteList]
    noteList.push(newNote)

    this.setState({
      noteList,
      newNote: '',
    })
  }

  deleteItem(id) {
    // copy current list of items
    const noteList = [...this.state.noteList]
    // filter out the item being deleted
    const updatedList = noteList.filter((item) => item.id !== id)

    this.setState({ noteList: updatedList })
  }

  //allows user to type and add info into note form

  //incorporates local storage
  componentDidMount() {
    this.hydrateStateWithLocalStorage()
    this.getDate()
    //adds event listener to save state to local storage when user leaves or refreshes the page
    window.addEventListener(
      'beforeunload',
      this.saveStateToLocalStorage.bind(this),
    )
  }

  getDate = () => {
    let date = new Date().toDateString()
    this.setState({ date })
  }

  componentWillUnmount() {
    window.removeEventListener(
      'beforeunload',
      this.saveStateToLocalStorage.bind(this),
    )
    this.saveStateToLocalStorage()
  }

  hydrateStateWithLocalStorage() {
    // for all items in state
    for (let item in this.state) {
      // if the key exists in localStorage
      if (localStorage.hasOwnProperty(item)) {
        // get the key's value from localStorage
        let value = localStorage.getItem(item)
        // parse the localStorage string and setState
        try {
          value = JSON.parse(value)
          this.setState({ [item]: value })
        } catch (e) {
          // handle empty string
          this.setState({ [item]: value })
        }
      }
    }
  }

  saveStateToLocalStorage() {
    for (let item in this.state) {
      localStorage.setItem(item, JSON.stringify(this.state[item]))
    }
  }

  updateInput(item, value) {
    this.setState({ [item]: value })
  }

  render() {
    return (
      <div className="noteContainer">
        <textarea
          type="text"
          placeholder="How am I feeling about my progress so far?"
          value={this.state.newNote}
          onChange={(event) => this.updateInput('newNote', event.target.value)}
          cols="30"
          rows="5"
        ></textarea>
        <button onClick={() => this.addNote()} timestamp={Date.now()}>
          SAVE
        </button>
        <h1>
          {this.state.noteList.map((item) => {
            return <ul key={item.id}>{item.value}</ul>
          })}
        </h1>
        <ul className="timestampBody">
          {this.state.noteList.map((item) => {
            return (
              <ul key={item.id}>
                <button
                  onClick={() => this.deleteItem(item.id)}
                  className="noteBtn"
                >
                  x
                </button>
                {this.state.currentDate}
              </ul>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default Notes
