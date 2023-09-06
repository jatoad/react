import React from 'react'
import Books from './Books'

function RenderingLists() {

    const booklist = [
        'to kill a mockingjay',
        'mein kampf',
        'the diary of a young girl',

    ]

    const books = [
        {
            title: 'to kill a mockingjay',
            author: 'snoop dogg',
            pages: 218,
        },
        {
            title: 'mein kampf',
            author: '50 cent',
            pages: 69,
        },
        {
            title: 'the diary of a young girl',
            author: 'anne frank',
            pages: 420,
        }
    ]

  return (
    <div>
        {
            booklist.map(book => {
                return(
                    <h2 key={book}>{book}</h2>
                )
            })
        }
        <hr />
        {
            books.map(book => {
                return(
                    <div key={book.title} >
                        <h5>{book.title}</h5>
                        <p>{book.author}</p>
                        <p>{book.pages}</p>
                    </div>
                )
            })
        }
        <hr />
        {
            books.map(book => {
                return(
                    <Books key={book.title} book={book} /> 
                )
            })
        }
    </div>
  )
}

export default RenderingLists