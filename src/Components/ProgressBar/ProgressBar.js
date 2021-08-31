import { Component } from 'react'

class ProgressBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      width: 0,
      score: 0,
    }
  }

  //incorporating local storage to ensure data stays when user refreshes or exits app with event listeners to determine when that happens
  componentDidMount() {
    this.hydrateStateWithLocalStorage()
    window.addEventListener(
      'beforeunload',
      this.saveStateToLocalStorage.bind(this),
    )
  }
  //incorporating local storage to ensure data stays when user refreshes or exits app with event listeners to determine when that happens
  componentWillUnmount() {
    this.hydrateStateWithLocalStorage()
    window.addEventListener(
      'beforeunload',
      this.saveStateToLocalStorage.bind(this),
    )
  }

  hydrateStateWithLocalStorage() {
    //for all items in state
    for (let key in this.state) {
      //if the key exists in localStorage
      if (localStorage.hasOwnProperty(key)) {
        //get that key's value from localStorage
        let value = localStorage.getItem(key)
        //pase the localStorage string and setState
        try {
          value = JSON.parse(value)
          this.setState({ [key]: value })
        } catch (e) {
          //handle empty strings
          this.setState({ [key]: 0 })
        }
      }
    }
  }

  saveStateToLocalStorage() {
    //for every item in React state
    for (let key in this.state) {
      //save to localStorage
      localStorage.setItem(key, JSON.stringify(this.state[key]))
    }
  }

  render() {
    const style = {
      width: this.state.width + '%',
    }

    return (
      <div>
        <br />
        {this.state.width + '%'}
        <div className="bar" style={style} />
        <button
          onClick={(e) => {
            this.handleForward(e)
          }}
          disabled={this.state.width >= 100}
        >
          Made It!
        </button>
        <button
          onClick={(e) => {
            this.handleBack(e)
          }}
          disabled={this.state.width === 1}
        >
          Missed
        </button>
      </div>
    )
  }
  handleBack(e) {
    this.setState((state) => {
      if (state.width + 0 === 100) {
        return { width: 0, score: state.score - 10 }
      }
      let newScore = state.width - 1.5
      return { width: parseFloat(newScore.toFixed(0)) }
    })
  }

  handleForward(e) {
    this.setState((state) => {
      if (state.width + 0 === 100) {
        return { width: 0, score: state.score + 1 }
      }
      let newScore = state.width + 1.5
      return { width: parseFloat(newScore.toFixed(0)) }
    })
  }
}

export default ProgressBar
