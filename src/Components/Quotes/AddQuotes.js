import { useState, setState } from 'react'
import axios from 'axios'

const AddNew = () => {
  const [quote, setQuote] = useState('')
  const [author, setAuthor] = useState('')

  const handleAuthorChange = (e) => {
    const { name, value } = e.target
    setAuthor({ [name]: value })
  }

  const handleQuoteChange = (e) => {
    const { name, value } = e.target
    setQuote({ [name]: value })
  }

  let bookData = {
    quote: quote.quote,
    author: author.author,
  }

  const addQuote = () => {
    const config = {
      url: 'http://localhost:5432/api/quotes',
      method: 'POST',
      timeout: 30000,
      data: bookData,
    }
    console.log(bookData)
    axios(config)
      .then((res) => {
        console.log(quote)
        setQuote('')
        setAuthor('')
      })
      .catch((err) => {
        console.log(err)
      })
  }
  console.log(bookData)

  return (
    <div>
      <h3 className="addQuoteHeader">OR ADD YOUR OWN FAVORITE QUOTE HERE</h3>
      <textarea
        cols="30"
        rows="5"
        placeholder="Add Quote"
        onChange={handleQuoteChange}
        name="quote"
        value={quote.quote}
      ></textarea>
      <h3>AUTHOR</h3>
      <input
        placeholder="Add Author"
        name="author"
        onChange={handleAuthorChange}
        value={author.author}
      ></input>
      <button onClick={addQuote}>SAVE</button>
    </div>
  )
}

export default AddNew
