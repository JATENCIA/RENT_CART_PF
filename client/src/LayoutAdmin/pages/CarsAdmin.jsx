import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Edit, Delete } from "@mui/icons-material";
import loading from "../../assets/loading.gif";
import axios from "axios";
import {
  FormControlLabel,
  Radio,
  RadioGroup,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Modal,
  Button,
  TextField,
} from "@mui/material";

const API_URL = `http://localhost:3001/cars/`;

function CarsAdmin() {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  // <--------------Treaer info Api--------------->

  const dataInfo = async () => {
    try {
      const { data } = await axios.get(API_URL);
      setData(data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    dispatch(dataInfo);
  }, [dispatch]);

  // <--------------Modificar los estados al Editar--------------->
  const [modalEdit, setModalEdit] = useState(false);
  const [carSelected, setCarSelected] = useState({
    licensePlate: "",
    brand: "",
    line: "",
    image: "",
    price: "",
    description: "",
    category: "",
    location: "",
    fuelConsumption: "",
    doors: "",
    colour: "",
    discount: "",
    fuelType: "",
    typeOfBox: "",
    active: "",
    status: "",
  });

  function handleChange(e) {
    setCarSelected({ ...carSelected, [e.target.name]: e.target.value });
    console.log(e.target.value);
  }

  const openCloseModalEdit = () => {
    setModalEdit(!modalEdit);
  };

  function selectCar(c, caso) {
    setCarSelected(c);
    caso === "Edit" && setModalEdit(true);
  }

  const peticionPut = async () => {
    await axios.put(API_URL + carSelected.id, carSelected).then((response) => {
      var dataNew = data;
      dataNew.map((car) => {
        if (carSelected.id === car.id) {
          car.licensePlate = carSelected.licensePlate;
          car.brand = carSelected.brand;
          car.line = carSelected.line;
          car.price = carSelected.price;
          car.description = carSelected.description;
          car.category = carSelected.category;
          car.location = carSelected.location;
          car.fuelConsumption = carSelected.fuelConsumption;
          car.doors = carSelected.doors;
          car.colour = carSelected.colour;
          car.discount = carSelected.discount;
          car.fuelType = carSelected.fuelType;
          car.typeOfBox = carSelected.typeOfBox;
          car.active = carSelected.active;
          car.status = carSelected.status;
        }
      });
      setData(dataNew);
      openCloseModalEdit();
    });
  };

  const bodyEdit = (
    <div className="bg-white  pl-2 pr-2">
      <h3 className="text-center pt-2 font-bold text-2xl">EDIT CARS</h3>
      <br />
      <TextField
        name="licensePlate"
        margin="normal"
        fullWidth
        label="licensePlate"
        onChange={handleChange}
        value={carSelected && carSelected.licensePlate}
      />
      <br />
      <TextField
        name="brand"
        margin="normal"
        fullWidth
        label="brand"
        onChange={handleChange}
        value={carSelected && carSelected.brand}
      />
      <br />
      <TextField
        name="line"
        margin="normal"
        fullWidth
        label="line"
        onChange={handleChange}
        value={carSelected && carSelected.line}
      />
      <br />
      <TextField
        name="price"
        margin="normal"
        fullWidth
        label="price"
        onChange={handleChange}
        value={carSelected && carSelected.price}
      />
      <br />
      <TextField
        name="description"
        margin="normal"
        fullWidth
        label="description"
        onChange={handleChange}
        value={carSelected && carSelected.description}
      />
      <br />
      <TextField
        name="category"
        margin="normal"
        fullWidth
        label="category"
        onChange={handleChange}
        value={carSelected && carSelected.category}
      />
      <TextField
        name="location"
        margin="normal"
        fullWidth
        label="location"
        onChange={handleChange}
        value={carSelected && carSelected.location}
      />
      <br />
      <TextField
        name="fuelConsumption"
        margin="normal"
        fullWidth
        label="fuelConsumption"
        onChange={handleChange}
        value={carSelected && carSelected.fuelConsumption}
      />
      <br />
      <TextField
        name="doors"
        margin="normal"
        fullWidth
        label="doors"
        onChange={handleChange}
        value={carSelected && carSelected.doors}
      />
      <br />
      <TextField
        name="colour"
        margin="normal"
        fullWidth
        label="colour"
        onChange={handleChange}
        value={carSelected && carSelected.colour}
      />
      <br />
      <TextField
        name="discount"
        margin="normal"
        fullWidth
        label="discount"
        onChange={handleChange}
        value={carSelected && carSelected.discount}
      />
      <br />
      <TextField
        name="fuelType"
        margin="normal"
        fullWidth
        label="fuelType"
        onChange={handleChange}
        value={carSelected && carSelected.fuelType}
      />
      <br />
      <TextField
        name="typeOfBox"
        margin="normal"
        fullWidth
        label="typeOfBox"
        onChange={handleChange}
        value={carSelected && carSelected.typeOfBox}
      />
      <br />
      <fieldset>
        <legend>Status</legend>
        <RadioGroup
          row
          name="status"
          value={carSelected && carSelected.status}
          style={{ marginLeft: "100px" }}
          onChange={handleChange}
        >
          <FormControlLabel
            value={"valid"}
            control={<Radio size="small" />}
            label="Valid"
          />
          <FormControlLabel
            value={"invalid"}
            control={<Radio size="small" />}
            label="Invalid"
          />
        </RadioGroup>
      </fieldset>
      <br />

      <fieldset>
        <legend>Active</legend>
        <RadioGroup
          row
          name="active"
          value={carSelected && carSelected.active}
          style={{ marginLeft: "100px" }}
          onChange={handleChange}
        >
          <FormControlLabel
            value={"valid"}
            control={<Radio size="small" />}
            label="Valid"
          />
          <FormControlLabel
            value={"invalid"}
            control={<Radio size="small" />}
            label="Invalid"
          />
        </RadioGroup>
      </fieldset>

      <br />
      <div align="rigth"></div>

      <Button onClick={peticionPut}>Edit</Button>
      <Button onClick={openCloseModalEdit}>Cancel</Button>
    </div>
  );

  return (
    <>
      <div className="flex font-bold text-3xl">
        <Link to="/create/car">
          <button
            type="button"
            className="absolute top-20 right-4 flex px-6 py-2.5 bg-primary text-[#023047] font-bold  text-xs leading-tight uppercase rounded shadow-md hover:bg-[#219EBC] hover:shadow-lg focus:bg-[#219EBC] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg  duration-150 ease-in-out"
          >
            Create new car
          </button>
        </Link>
      </div>

      <div className="bg-white mt-[40px]">
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                {/* <TableCell>Id</TableCell> */}
                <TableCell>LicensePlate</TableCell>

                <TableCell>Line</TableCell>
                <TableCell>Doors</TableCell>
                <TableCell>TypeOfBox</TableCell>
                <TableCell>Category</TableCell>

                <TableCell>Price</TableCell>
                {/* <TableCell>Colour</TableCell> */}
                <TableCell>Status</TableCell>
                <TableCell>Active</TableCell>
                <TableCell>Accions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody key="">
              {data.length !== 0 ? (
                data.map((c) => {
                  return (
                    <TableRow key={c.id}>
                      {/* <TableCell>{c._id}</TableCell> */}
                      <TableCell>{c.licensePlate}</TableCell>

                      <TableCell>{c.line}</TableCell>
                      <TableCell>{c.doors}</TableCell>
                      <TableCell>{c.typeOfBox}</TableCell>
                      <TableCell>{c.category}</TableCell>

                      <TableCell>{c.price}</TableCell>
                      {/* <TableCell>{c.colour}</TableCell> */}
                      <TableCell>{c.status}</TableCell>
                      <TableCell>{c.active}</TableCell>
                      <TableCell>
                        <Edit
                          className="cursor-pointer"
                          color="primary"
                          onClick={() => selectCar(c, "Edit")}
                        />
                        &nbsp;&nbsp;&nbsp;
                        <Delete color="error" className="cursor-pointer" />
                      </TableCell>
                    </TableRow>
                  );
                })
              ) : (
                <img className="items-center" src={loading} alt="loading" />
              )}
            </TableBody>
          </Table>
        </TableContainer>

        <Modal
          className="overflow-y-scroll  w-[400px] h-[60%] top-0 left-0 right-0 fixed m-auto scroll-m-2  border-2 border-[#000]  "
          open={modalEdit}
          onClose={openCloseModalEdit}
        >
          {bodyEdit}
        </Modal>
      </div>
    </>
  );
}

export default CarsAdmin;
