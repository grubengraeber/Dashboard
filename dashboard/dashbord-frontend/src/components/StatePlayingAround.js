import { Button } from '@mui/material';
import React from 'react'
import { useAppState } from '../state/appState'





const StatePlayingAround = () => {
  const appState = useAppState();
  console.log(appState);

  const handleOnClickButton = () => {
    //TODO everytime!!! use callbacks for setState!!!
    appState.setState((previousState) => ({ ...previousState, dateFilter: "YEAR" }))



  }

  return (
    <>
      <h3>{appState.state.dateFilter}</h3>
      <div>StatePlayingAround</div>
      <Button onClick={handleOnClickButton}>Year</Button>
    </>
  )
}





export default StatePlayingAround