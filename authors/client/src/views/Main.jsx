import React, { useEffect, useState } from 'react';
import AuthorList from '../components/AuthorList';
import axios from 'axios';


const Main = () => {
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/author')
            .then(res => {
                console.log(res.data);
                setAuthors(res.data);
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    
    
    const deleteAuthor  = (authorId) => {
        axios.delete('http://localhost:8000/api/author/delete/' + authorId)
            .then(res => {
                console.log(res.data);
                setAuthors(authors.filter(author => author._id !== authorId));
            })
            .catch(err => {
                console.log(err)
            })
    }
    

  return (
    <div>
        <h1>Favorite Authors</h1>

        <AuthorList authors={authors} deleteAuthor={deleteAuthor} />
    </div>
  )
}

export default Main