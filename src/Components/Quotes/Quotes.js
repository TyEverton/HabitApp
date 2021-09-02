import { Component } from 'react'
import axios from 'axios'
import "./quotes.css"

class Quotes extends Component {
  constructor() {
    super()
    this.state = {
      quote: [],
      newQuote: ''
    }

  }



  componentDidMount = async () => {
    await axios.get('https://localhost:3000/quotes').then((res) => {
      console.log("working")
      this.setState({ quote: res.data })
    })
  }

  addQuote() {
    axios.post('/api/quotes', {})
    .then((res) => {
      this.props.quotes.push(this.state.newQuote)
    })
    .catch((err) => {
      console.log(err)
    })
  }


  render() {
    return (
      <div>
        <div>
          <section className="grabQuoteContainer">
          <h3 className="motivationHeader">NEED SOME QUOTIVATION? CLICK THE AL'MIGHTY QUOTE GENERATOR!</h3>
          <button onClick={this.handleClick} className="quoteBtn">QUOTES</button>
          <h2>
            {/* {this.state.quotes.map((quote) => {
            quote
          })} */}
          </h2>
          </section>
        </div>
        <h3 className="addQuoteHeader">OR ADD YOUR OWN FAVORITE QUOTE HERE</h3>
        <h3 className="quote">{this.state.quote}</h3>
        <textarea 
        cols="30"
        rows="5"
        placeholder="Add Quote"
        ></textarea>
        <h3>AUTHOR</h3>
        <input placeholder="Add Author"></input>
        <button>SAVE</button>
      </div>
    )
  }
}

export default Quotes
