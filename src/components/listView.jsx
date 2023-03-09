import React from 'react'

import { Box, Card, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { Padding } from '@mui/icons-material';

const data = [
  { id: 1, name: 'John', insuranceNum: 11230, dob: '11/21/1985' },
  { id: 2, name: 'Jane', insuranceNum: 45925, dob: '05/17/2000' },
  { id: 3, name: 'Bob', insuranceNum: 66335, dob: '02/03/1993' },
];

const ListView = () => {
  return (
    <Box sx={{ marginTop: 2 }}>
      <Typography variant="h4" sx={{ marginBottom: 2 }}>List View</Typography>
      <TableContainer component={Card} sx ={{marginRight: 2}}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Insurance Number</TableCell>
              <TableCell>Date Of Birth</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(row => (
              <TableRow key={row.id}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.insuranceNum}</TableCell>
                <TableCell>{row.dob}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default ListView;