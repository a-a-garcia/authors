import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import AuthorForm from '../components/AuthorForm';
import DenyEditPage from './DenyEditPage';

const HandleForm = () => {
    const [author, setAuthor] = useState({});
    const [errors, setErrors] = useState({});
    const [authorIdExists, setAuthorIdExists] = useState(true); //assumes initially that author exists
    const { id } = useParams();
    const navigate = useNavigate();


    useEffect(() => {
        if (id) {
        axios.get('http://localhost:8000/api/author/' + id)
            .then(res => {
                console.log(res.data);
                setAuthor(res.data);
            })
            .catch(err => {
                console.log(err.response.data.errors);
                setAuthorIdExists(false);
            })
        }
    }, [id])

    const handleCreate = (newAuthor) => {
        console.log(`handleCreate running`)
        axios.post('http://localhost:8000/api/author/new', newAuthor)
            .then(res => {
                console.log(res.data);
                setAuthor(res.data);
                navigate('/authors');
            })
            .catch(err => {
                console.log(err.response.data.error.errors);
                setErrors(err.response.data.error.errors);
            })
    }

    const handleEdit = (authorToUpdate) => {
        console.log(`handleEdit running`)
        axios.patch('http://localhost:8000/api/author/edit/' + id, authorToUpdate)
            .then(res => {
                console.log(res.data);
                setAuthor(res.data);
                navigate('/authors');
            })
            .catch(err => {
                console.log(err.response.data.error.errors);
                setErrors(err.response.data.error.errors);
            })
    }


  return (
    <div>
        { 
            !authorIdExists ? (
                <DenyEditPage setAuthorIdExists={setAuthorIdExists}/>
            ) : (
                id ? (
                <AuthorForm author={author} onSubmitProp={handleEdit} initialName="" errors={errors} setErrors={setErrors}/>
                ) : (
                <AuthorForm onSubmitProp={handleCreate} initialName="" errors={errors} setErrors={setErrors}/>
                )
            )
        }
    </div>
  )
}
export default HandleForm