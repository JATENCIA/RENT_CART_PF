import React, { useState, useEffect } from "react";
import { Edit, Delete } from "@mui/icons-material";
import axios from "axios";
import { useDispatch } from "react-redux";
import loading from "../../assets/loading.gif";
import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";

const API_URL = `http://localhost:3001/users`;

function Users() {
  const dispatch = useDispatch();
  const [users, setUsers] = useState([]);
  const dataInfo = async () => {
    try {
      const { data } = await axios.get(API_URL);
      setUsers(data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    dispatch(dataInfo);
  }, [dispatch]);

  return (
    <div className="bg-white">
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {/* <TableCell>Id</TableCell> */}
              <TableCell>Name</TableCell>
              <TableCell>LastName</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Telephone</TableCell>
              <TableCell>Roll</TableCell>
              <TableCell>Active</TableCell>
              <TableCell>Accions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.length !== 0 ? (
              users.map((u) => {
                return (
                  <TableRow key={u.id}>
                    {/* <TableCell>{u._id}</TableCell> */}
                    <TableCell>{u.name}</TableCell>
                    <TableCell>{u.lastName}</TableCell>
                    <TableCell>{u.eMail}</TableCell>
                    <TableCell>{u.telephone}</TableCell>
                    <TableCell>{u.roll}</TableCell>
                    <TableCell>{u.active}</TableCell>
                    <TableCell>
                      <Edit />
                      &nbsp;&nbsp;&nbsp;
                      <Delete />
                    </TableCell>
                  </TableRow>
                );
              })
            ) : (
              <div className="flex">
                <img className="items-center" src={loading} alt="loading" />
              </div>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Users;
