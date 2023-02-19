import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Edit, Delete } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";

const API_URL = `http://localhost:3001/accessories`;

function AccessoriesAdmin() {
  const dispatch = useDispatch();
  const [accesories, setAccessories] = useState([]);

  const dataInfo = async () => {
    try {
      const { data } = await axios.get(API_URL);
      setAccessories(data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    dispatch(dataInfo);
  }, [dispatch]);

  return (
    <div className="flex font-bold text-3xl">
      <h1>
        <span className="text-primary">Accessories!</span>
      </h1>
      <div className="bg-blue-900">
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Accions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {accesories.map((a) => (
                <TableRow key={a.id}>
                  <TableCell>{a._id}</TableCell>
                  <TableCell>{a.name}</TableCell>
                  <TableCell>{a.price}</TableCell>
                  <TableCell>{a.quantity}</TableCell>
                  <TableCell>{a.status}</TableCell>
                  <TableCell>
                    <Edit />
                    &nbsp;&nbsp;&nbsp;
                    <Delete />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <Link to="/create/accessory">
        <button
          type="button"
          className="absolute top-25 right-4 flex px-6 py-2.5 text-[#023047] font-bold bg-primary text-xs leading-tight uppercase rounded shadow-md hover:bg-[#219EBC] hover:shadow-lg focus:bg-[#219EBC] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#219EBC] active:shadow-lg  duration-150 ease-in-out"
        >
          Create new accessory
        </button>
      </Link>
    </div>
  );
}

export default AccessoriesAdmin;
