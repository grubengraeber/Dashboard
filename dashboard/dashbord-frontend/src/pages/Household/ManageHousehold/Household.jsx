import React, { useEffect, useState } from 'react'
import { PaperStructure } from '../../../components/Structure/PaperStructure'
import { endpoints } from '../../../Fetch/api/household/endpoints'
import HouseholdTable from './HouseholdTable'
import { Typography } from '@mui/material'

export const Household = () => {
  const [householdData, setHouseholdData] = useState(null)

  useEffect(() => {
      async function fetchData() {
        try {
          const response = await endpoints.getHousehold();
          setHouseholdData(response.data);
        } catch (error) {
          console.log(error.message)
        }
      }
      fetchData();
  }, [])

  const houseHoldPresented = householdData !== null ? 
  <>
    <Typography variant='h2' align='center'>My Household</Typography>
    <HouseholdTable householdData={householdData} />
  </>
  : 
  <><p>No data fetched yet</p></>;
  return (
    <>
      <PaperStructure children={houseHoldPresented} />
    </>
  )
}
