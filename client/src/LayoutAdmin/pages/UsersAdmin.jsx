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
  const [userSelecionado, setUserSeleccionado] = useState({
    active: "",
  });
  function handleChange(e) {
    setUserSeleccionado({
      ...userSelecionado,
      [e.target.name]: e.target.value,
    });
    console.log(e.target.value);
  }
  const openCloseModalEdit = () => {
    setModalEdit(!modalEdit);
  };

  const selecionarUser = (u, caso) => {
    setUserSeleccionado(u);
    caso === "Edit" && setModalEdit(true);
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
            value={userSelecionado && userSelecionado.active}
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
        <div align="rigth"></div>

        {/* <Button className="text-primary" onClick={() => peticionPut()}>
          Edit
        </Button> */}
        <Button className="text-primary" onClick={() => openCloseModalEdit()}>
          Cancel
        </Button>
      </div>
    </div>
  );

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
                      <Edit
                        className="cursor-pointer"
                        onClick={() => selecionarUser(u, "Edit")}
                        color="primary"
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
        className="overflow-y-scroll  w-[400px] h-[33%] top-0 left-0 right-0 fixed m-auto scroll-m-2  border-2 border-[#000]  "
        open={modalEdit}
        onClose={() => openCloseModalEdit()}
      >
        {bodyEdit}
      </Modal>
    </div>
  );
}

export default Users;
