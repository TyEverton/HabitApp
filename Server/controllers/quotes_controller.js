module.exports = {
  randomQuote: async (req, res) => {
    //async function - takes a request and a response, line 4 gets the database from the app, then line 5 says we need a quote, so go to the db and get a random quote from randomQuote function, wait for it to come back so we have a quote to send to the front end
    //line 8 says that this was all successful, so send the first quote in the array
    const db = req.app.get('db')
    const quote = await db.randomQuote()
    return res.status(201).send(quote[0])
  },

  addQuote: async (req, res) => {
    const db = req.app.post('db')
    
  }
}
