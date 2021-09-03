import { useState } from 'react'
import axios from 'axios'
import './quotes.css'

const Quotes = () => {
  const [quote, setQuote] = useState({})

  const addQuote = () => {
    const config = {
      url: 'http://localhost:5432/api/quotes',
      method: 'GET',
      timeout: 30000,
    }
    axios(config)
      .then((res) => {
        setQuote(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div>
      <div>
        <h3 className="quoteHeader">CLICK BELOW FOR SOME MOTIVATION</h3>
        <section className="grabQuoteContainer">
          <h2>
            {quote.quote} -{quote.author}
          </h2>
        </section>
        <button onClick={addQuote} className="quoteBtn">
          QUOTES
        </button>
      </div>
    </div>
  )
}

export default Quotes
