import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Edit, Delete } from "@mui/icons-material";
import loading from "../../assets/loading.gif";
import axios from "axios";
import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TablePagination,
} from "@mui/material";

const API_URL = `http://localhost:3001/cars`;

function CarsAdmin() {
  const dispatch = useDispatch();
  const [cars, setCars] = useState([]);
  const dataInfo = async () => {
    try {
      const { data } = await axios.get(API_URL);
      setCars(data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    dispatch(dataInfo);
  }, [dispatch]);

  return (
    <div className="flex font-bold text-3xl">
      <Link to="/create/car">
        <button
          type="button"
          className="absolute top-25 right-4 flex px-6 py-2.5 bg-primary text-[#023047] font-bold  text-xs leading-tight uppercase rounded shadow-md hover:bg-[#219EBC] hover:shadow-lg focus:bg-[#219EBC] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg  duration-150 ease-in-out"
        >
          Create new car
        </button>
      </Link>
      <div className="bg-white mt-20">
        <TableContainer>
          <Table className="text-2xl">
            <TableHead className="bg-purple-200">
              <TableRow>
                {/* <TableCell>Id</TableCell> */}
                <TableCell>LicensePlate</TableCell>
                <TableCell>Brand</TableCell>
                <TableCell>Line</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Location</TableCell>
                {/* <TableCell>Review</TableCell> */}
                <TableCell>Status</TableCell>
                <TableCell>Active</TableCell>
                <TableCell>Accions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cars.length !== 0 ? (
                cars.map((c) => {
                  return (
                    <TableRow key={c.id}>
                      {/* <TableCell>{c._id}</TableCell> */}
                      <TableCell>{c.licensePlate}</TableCell>
                      <TableCell>{c.brand}</TableCell>
                      <TableCell>{c.line}</TableCell>
                      <TableCell>{c.category}</TableCell>
                      <TableCell>{c.location}</TableCell>
                      {/* <TableCell>{c.review}</TableCell> */}
                      <TableCell>{c.status}</TableCell>
                      <TableCell>{c.active}</TableCell>
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
        <TablePagination rowsPerPageOptions={[5, 10]} />
      </div>
    </div>
  );
}

export default CarsAdmin;
