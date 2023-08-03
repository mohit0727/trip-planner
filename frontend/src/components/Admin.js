import { React, useState, useEffect } from 'react'
import axios from 'axios';

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const baseUrl = 'http://localhost:3000';

const columns = [
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'email', label: 'Email', minWidth: 100 },
    {
      id: 'country',
      label: 'Country'
    },
    {
      id: 'interests',
      label: 'Interests'
    },
    {
      id: 'no_of_travellers',
      label: 'No. of Travellers'
    },
    {
      id: 'no_of_days',
      label: 'No. of Days'
    },
    {
      id: 'season',
      label: 'Season'
    },
    {
      id: 'budget',
      label: 'Budget'
    },
    {
      id: 'food_options',
      label: 'Food Options'
    },
    {
      id: 'type_of_stay',
      label: 'Type of Stay'
    },
    {
      id: 'mode_of_travel',
      label: 'Mode of Travel'
    },
    {
      id: 'mode_of_travel_within_city',
      label: 'Mode of Travel Within City'
    },
    {
      id: 'travel_plan',
      label: 'Travel Plan'
    },
    {
      id: 'subsciption',
      label: 'Subscription'
    },
    
];

export default function Admin() {
    const [rows, setRows] = useState([])
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    
    useEffect(() => {
        axios.get(`${baseUrl}/api/travel-plan`).then((response) => {
            setRows([...rows, ...response.data])
        });
        }, [])
    
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
    <TableContainer sx={{ maxHeight: 440 }}>
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell
                key={column.id}
                align={column.align}
                style={{ minWidth: column.minWidth }}
              >
                {column.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row._id}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number'
                          ? column.format(value)
                          : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </TableContainer>
    <TablePagination
      rowsPerPageOptions={[10, 25, 100]}
      component="div"
      count={rows.length}
      rowsPerPage={rowsPerPage}
      page={page}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  </Paper>
    )
}
