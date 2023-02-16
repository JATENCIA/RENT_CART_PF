import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Edit, Delete } from "@mui/icons-material";
import axios from "axios";
import loading from "../../assets/loading.gif";
import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
const API_URL = `http://localhost:3001/billing`;

function BookingsAdmin() {
  const dispatch = useDispatch();
  const [bookings, setBookings] = useState([]);
  const dataInfo = async () => {
    try {
      const { data } = await axios.get(API_URL);
      setBookings(data);
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
              <TableCell>Invoice-Number</TableCell>
              {/* <TableCell>User</TableCell> */}
              <TableCell>Status</TableCell>
              <TableCell>Accions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {bookings.length !== 0 ? (
              bookings.map((b) => {
                return (
                  <TableRow key={b.id}>
                    <TableCell>{b.invoice_number}</TableCell>
                    {/* <TableCell>{c.user._id}</TableCell> */}
                    <TableCell>{b.active}</TableCell>
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

export default BookingsAdmin;
