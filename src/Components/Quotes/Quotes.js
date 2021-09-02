import { useState } from 'react'
import axios from 'axios'
import './quotes.css'

const Quotes = () => {
  const [quote, setQuote] = useState({})

  const grabQuote = () => {
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
        <section className="grabQuoteContainer">
          <h3 className="motivationHeader">
            NEED SOME QUOTIVATION? CLICK THE AL'MIGHTY QUOTE GENERATOR!
          </h3>
          <button onClick={grabQuote} className="quoteBtn">
            QUOTES
          </button>
          <h2>
            {quote.quote} -{quote.author}
          </h2>
        </section>
      </div>
    </div>
  )
}

export default Quotes
