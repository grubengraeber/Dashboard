import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


function Row({ row }) {
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.appUserName}
        </TableCell>
        <TableCell >{row.firstName}</TableCell>
        <TableCell >{row.lastName}</TableCell>
        <TableCell >{row.email}</TableCell>
        <TableCell >{row.birthdate}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                roles
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell key={"rolename"}>role name</TableCell>
                    <TableCell key={"rolename rank"}>role rank</TableCell>
                    <TableCell key={"rolecount"} >role count</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.roles.map((rolesRow) => (
                    <TableRow key={rolesRow.id}>
                      <TableCell component="th" scope="row" key={rolesRow.name + "1"}>
                        {rolesRow.name}
                      </TableCell>
                      <TableCell key={rolesRow.rank + "2"}>{rolesRow.rank}</TableCell>
                      <TableCell key={rolesRow.countInThisHousehold + "3"}>{rolesRow.countInThisHousehold}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

/*
Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }),
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};
*/



export const HouseholdTable = ({ householdData }) => {
    
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>username</TableCell>
            <TableCell >first name</TableCell>
            <TableCell >last name</TableCell>
            <TableCell >email</TableCell>
            <TableCell >birthdate</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {householdData.appUsers.map((row) => (
            <Row key={row.id} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default HouseholdTable
