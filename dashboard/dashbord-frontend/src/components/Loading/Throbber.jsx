import React from 'react'
import { CircularProgress } from '@mui/material'

export const Throbber = ({ isLoading }) => {
  return (
    <h3>{isLoading ? <CircularProgress /> : null}</h3>
  )
}
