import { Button } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Unauthorized = () => {
    const navigate = useNavigate();

    const goBack = () => navigate(-1);

  return (
    <div>
        <h1>THIS IS THE UNAUTHORIZED PAGE</h1>
        <Button onClick={goBack}>Go Back</Button>
    </div>
  )
}
