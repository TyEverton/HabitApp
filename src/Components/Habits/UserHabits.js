import React, { Component } from 'react'
import ProgressBar from '../ProgressBar/'
import Notes from './Notes'


class UserHabits extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newItem: '',
      list: [],
    }

    // this.handleNoteChange = this.handleNoteChange.bind(this)
  }

  //add new habit
  addItem() {
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice(),
    }
    const list = [...this.state.list]
    list.push(newItem)

    this.setState({
      list,
      newItem: '',
    })
  }

  //delete habit
  deleteItem(id) {
    // copy current list of items
    const list = [...this.state.list]
    // filter out the item being deleted
    const updatedList = list.filter((item) => item.id !== id)

    this.setState({ list: updatedList })
  }

  //allows user to type and add info into note form




  //incorporates local storage
  componentDidMount() {
    this.hydrateStateWithLocalStorage()
    //adds event listener to save state to local storage when user leaves or refreshes the page
    window.addEventListener(
      'beforeunload',
      this.saveStateToLocalStorage.bind(this),
    )
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

  //updates user input
  updateInput(item, value) {
    this.setState({ [item]: value })
  }

  render() {
    return (
      <div>
        <h1>MY HABITS</h1>
        <div>
          <div>
            <input
              type="text"
              placeholder="New Habit"
              value={this.state.newItem}
              onChange={(event) =>
                this.updateInput('newItem', event.target.value)
              }
            />
            <button
              onClick={() => this.addItem()}
              disabled={!this.state.newItem.length}
            >
              <i> + </i>
            </button>
            <br /> <br />
            <ul>
              {this.state.list.map((item) => {
                return (
                  <ul key={item.id}>
                    {item.value}
                    <button onClick={() => this.deleteItem(item.id)}>x</button>
                    <div></div>
                    <ProgressBar />
                    <Notes notes={this.state.notes}/>
                  </ul>
                )
              })}
            </ul>
          </div>
        </div>
        <form></form>
      </div>
    )
  }
}
export default UserHabits
