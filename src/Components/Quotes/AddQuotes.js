// import {useState} from "react"
// import axios from "axios"


// const AddNew = () => {
//   const [quote, setQuote] = useState({})

//   const addQuote = () => {
//     const config = {
//       url: 'http://localhost:5432/api/quotes',
//       method: 'POST',
//       timeout: 30000,
//     }
//     axios(config)
//       .then((res) => {
//         setQuote(res.data)
//         console.log(quote)
//       })
//       .catch((err) => {
//         console.log(err)
//       })
//   }

//   return (
//     <div>
//       <div>
//         <section className="grabQuoteContainer">
//           <h3 className="motivationHeader">
//             NEED SOME QUOTIVATION? CLICK THE AL'MIGHTY QUOTE GENERATOR!
//           </h3>
//           <button onClick={addQuote} className="quoteBtn">
//             QUOTES
//           </button>
//           <h2>
//             {quote.quote} -{quote.author}
//           </h2>
//         </section>
//       </div>
//       <h3 className="addQuoteHeader">OR ADD YOUR OWN FAVORITE QUOTE HERE</h3>
//       <h3 className="quote">{''}</h3>
//       <textarea cols="30" rows="5" placeholder="Add Quote"></textarea>
//       <h3>AUTHOR</h3>
//       <input placeholder="Add Author"></input>
//       <button>SAVE</button>
//     </div>
//   )
// }

// export default AddNew