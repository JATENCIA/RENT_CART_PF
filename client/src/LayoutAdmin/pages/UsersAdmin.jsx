import React, { useState, useEffect } from "react";
import { Edit, Delete } from "@mui/icons-material";
import axios from "axios";
import { useDispatch } from "react-redux";
import loading from "../../assets/loading.gif";
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
  TextField,
  Modal,
  Button,
} from "@mui/material";

const API_URL = `http://localhost:3001/users`;

function Users() {
  const dispatch = useDispatch();
  const [users, setUsers] = useState([]);
  const [modalEdit, setModalEdit] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [userSeleccionado, setUserSeleccionado] = useState({
    active: "",
  });
  function handleChange(e) {
    setUserSeleccionado({
      ...userSeleccionado,
      [e.target.name]: e.target.value,
    });
    console.log(e.target.value);
  }
  const openCloseModalEdit = () => {
    setModalEdit(!modalEdit);
  };

  const openCloseModalDelete = () => {
    setModalDelete(!modalDelete);
  };

  const seleccionarUser = (u, caso) => {
    setUserSeleccionado(u);
    caso === "Edit" ? openCloseModalEdit() : openCloseModalDelete();
  };

  const peticionDelete = async () => {
    await axios.delete(API_URL + userSeleccionado.id).then((response) => {
      setData(data.filter((u) => u.id !== userSeleccionado.id));
    });
  };

  const peticionPut = async () => {
    await axios
      .put(API_URL + userSeleccionado.id, userSeleccionado)
      .then((response) => {
        var dataNew = data;
        dataNew.map((u) => {
          if (userSeleccionado.id === u.id) {
            u.active = userSeleccionado.active;
          }
        });
        setData(dataNew);
        openCloseModalEdit();
      });
  };

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

  const bodyEdit = (
    <div>
      <div className="bg-white  pl-2 pr-2">
        <h3 className="text-center pt-2 font-bold text-2xl ">MANAGER USERS</h3>
        <br />
        <fieldset>
          <legend>Active</legend>
          <RadioGroup
            row
            name="active"
            value={userSeleccionado && userSeleccionado.active}
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
        <br />
        <div className="text-center pb-6">
          {/* <Button variant="contained" color="success" onClick={peticionPut}>
          Edit
        </Button> */}
          <Button
            variant="contained"
            color="error"
            onClick={openCloseModalEdit}
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );

  const bodyDelete = (
    <div className="bg-white  pl-2 pr-2">
      <p className="text-center pt-10 pb-12 font-bold text-2xl ">
        Are you sure you want to remove the user{" "}
        <b>{userSeleccionado && userSeleccionado.eMail}</b> ?
      </p>
      <div className="text-center pb-12 ">
        <Button variant="contained" color="success" onClick={peticionDelete}>
          Yes
        </Button>
        <Button
          variant="contained"
          color="error"
          onClick={openCloseModalDelete}
        >
          No
        </Button>
      </div>
    </div>
  );

  return (
    <div className="bg-white">
      <TableContainer>
        <Table>
          <TableHead className="bg-[#8ECAE6]">
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
                      <Edit
                        className="cursor-pointer"
                        onClick={() => seleccionarUser(u, "Edit")}
                        color="primary"
                      />
                      &nbsp;&nbsp;&nbsp;
                      <Delete
                        onClick={() => seleccionarUser(u, "Delete")}
                        color="error"
                        className="cursor-pointer"
                      />
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
        className=" mt-40  w-[400px] h-[33%] top-0 left-0 right-0 fixed m-auto scroll-m-2  border-2 border-[#000]  "
        open={modalEdit}
        onClose={() => openCloseModalEdit()}
      >
        {bodyEdit}
      </Modal>

      <Modal
        className=" mt-40  w-[700px] h-[33.5%] top-0 left-0 right-0 fixed m-auto scroll-m-2  border-2 border-[#000]  "
        open={modalDelete}
        onClose={() => openCloseModalDelete()}
      >
        {bodyDelete}
      </Modal>
    </div>
  );
}

export default Users;
