import React, { useEffect, useState } from 'react'
import { PaperStructure } from '../../../components/Structure/PaperStructure'
import { endpoints } from '../../../Fetch/api/household/endpoints'
import HouseholdTable from './HouseholdTable'
import { Typography } from '@mui/material'
import { Throbber } from '../../../components/Loading/Throbber'
import { Widgets } from './Widgets/Widgets'
import useAuth from '../../../hooks/useAuth';


export const Household = () => {
  const [householdData, setHouseholdData] = useState(null)

  const { auth } = useAuth();
  const bearerToken = auth.accessToken;
  console.log("Bearer in household: " + bearerToken);

  useEffect(() => {
      async function fetchData() {
        try {
          const response = await endpoints.getHousehold(bearerToken);
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
    <Widgets />
    <HouseholdTable householdData={householdData} tableHeader={"Household Users"} />
  </>
  : 
  <><Throbber /></>;
  return (
    <>
      <PaperStructure children={houseHoldPresented} />
    </>
  )
}
