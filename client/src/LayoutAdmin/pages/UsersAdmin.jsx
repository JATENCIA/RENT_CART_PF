import React from "react";
import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";

function Users() {
  return (
    <div className="bg-blue-900">
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>LastName</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Telephone</TableCell>
                <TableCell>Roll</TableCell>
                <TableCell>Status</TableCell>                
                <TableCell>Accions</TableCell>
              </TableRow>
            </TableHead>
          </Table>
        </TableContainer>
        </div>
  );
}

export default Users;
