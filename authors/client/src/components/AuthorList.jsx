import React from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const AuthorList = (props) => {
    const { authors, deleteAuthor } = props;
    const navigate = useNavigate();

    const handleDelete = (authorId) => {
        deleteAuthor(authorId);
        navigate('/authors');
    }

  return (
    <div>
        <Link to={'/authors/new'}><Button variant="contained" className='m-3'>Add an Author</Button></Link>
        <h3>We have quotes by:</h3>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table" className="dark-table">
                <TableHead>
                    <TableRow>
                        <TableCell align="right">Author</TableCell>
                        <TableCell align="right">Actions available</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        authors.map((author) => {
                            return (
                                    <TableRow key={author._id}>
                                        <TableCell align="right">{author.name}</TableCell>
                                        <TableCell align="right">
                                            <Link to={`/authors/${author._id}/edit`}><Button variant="contained" color="primary" className='m-1'>Edit</Button></Link>
                                            <Button variant="contained" color="error" className='m-1' onClick={() => handleDelete(author._id)}>Delete</Button> 
                                        </TableCell>
                                    </TableRow>
                            )
                        })
                    }
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default AuthorList