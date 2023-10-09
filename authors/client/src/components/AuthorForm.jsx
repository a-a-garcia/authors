import React, { useEffect } from 'react'
import { useState } from 'react';
import { Paper, TextField, Button } from '@mui/material';
import { Link, useNavigate, useParams } from 'react-router-dom';

const AuthorForm = (props) => {
    const { author, onSubmitProp, errors, setErrors, initialName  } = props;
    const [authorName, setAuthorName] = useState(initialName);
    const { id} = useParams();

    useEffect(() => {
        author ? setAuthorName(author.name) : setAuthorName('');
    }, [author])

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors({});
        onSubmitProp({ name: authorName});
        setAuthorName('');
    };

    return (
        <div className='std-flex'>
            <h1>Favorite Authors</h1>
            <Link to={'/authors'}><Button variant="contained" className='m-3'>Home</Button></Link>
            { !id ? <h2>Add a new author:</h2> : <h2>Edit this author:</h2>}
            <Paper elevation={3} className="form-container p-3 w-50">
                <form onSubmit={handleSubmit} className='std-flex'>
                    <p>Author Name:</p>
                    <TextField
                        error={errors.name}
                        id="standard-error-helper-text"
                        value={authorName}
                        helperText={errors.name ? errors.name.message : null}
                        onChange={(event) => {
                            setAuthorName(event.target.value)}}
                        className="mb-3"
                    /> 
                    <div className='std-flex'>
                        <Link to={`/authors`}><Button variant="contained" color="primary" className='mb-2'>
                            Cancel
                        </Button></Link>
                        <Button type="submit" variant="contained" color="primary">
                            Submit
                        </Button>
                    </div>
                </form>
            </Paper>
        </div>
    );
};


export default AuthorForm