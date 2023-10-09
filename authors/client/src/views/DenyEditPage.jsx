import React from 'react'
import { Backdrop, Alert, Button } from '@mui/material'
import { useParams, useNavigate } from 'react-router-dom'


const DenyEditPage = (props) => {
    const { setAuthorIdExists } = props;
    const {id} = useParams();
    const navigate = useNavigate();
    console.log(id);

    const handleClick = () => {
        setAuthorIdExists(true);
        navigate('/authors/new');
    }

  return (
    <>
          <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={true} // Always open when author doesn't exist
          >
            <div className='std-flex'>
                <Alert variant="filled" severity="error" className="mb-3">
                Author with ID {id} does not exist. Click the button below to add a new author.
                </Alert>
                <Button variant="contained" onClick={handleClick}>Add a new author</Button>
            </div>
          </Backdrop>
    </>
  )
}

export default DenyEditPage