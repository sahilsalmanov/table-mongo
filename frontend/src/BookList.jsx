import axios from 'axios'
import React, { useEffect, useState } from 'react'

function BookList() {


  const [books, setBooks] = useState([])


  useEffect(() => {
    axios.get('http://localhost:3000/api/books')
    .then(res => setBooks(res.data))
  }, [])

  console.log(books)
  


  return (
    <table style={{ borderCollapse: 'collapse' }}>
        <thead>
           <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Publish Date</th>
            <th>Date Time</th>
           </tr>
        </thead>
        <tbody>
  {books.map((item) => (
    <tr key={item.id}>
      <td style={{ padding: '10px', border: '1px solid black' }}>{item._id}</td>
      <td style={{ padding: '10px', border: '1px solid black' }}>{item.name}</td>
      <td style={{ padding: '10px', border: '1px solid black' }}>{item.publishDate}</td>
      <td style={{ padding: '10px', border: '1px solid black' }}>{item.addDate}</td>
    </tr>
  ))}
</tbody>
    </table>
  )
}

export default BookList