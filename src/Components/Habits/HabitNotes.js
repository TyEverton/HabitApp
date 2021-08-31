import { useState } from 'react'

const AddNote = () => {
  const [note, setNote] = useState({title: '', text:''})

  function handleChange() {

  }
  return (
    <container>
      <form>
        <textarea>
          
        </textarea>
      </form>
    </container>
  )
}

export default AddNote
