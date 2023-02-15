import { Formik, Field, Form, useFormik } from "formik";

import React, { useState } from "react";
import { Widget } from "@uploadcare/react-widget";
import * as Yup from "yup";
import {
  Button,
  FormControl,
  FormControlLabel,
  MenuItem,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";

export const FormCar = () => {
  const submitForm = (values) => {};
  const uploadFileChange = (info) => {
    console.log(info);
    // setUpdateList(false);
    // if (info) {
    //   setUpdateList(true);
    // }
  };
  const uploadFileSelect = (file) => {
    console.log(`changed ${file}`);
  };
  const { handleSubmit, errors, touched, getFieldProps, handleChange, values } =
    useFormik({
      initialValues: {
        licensePlate: "",
        brand: "",
        image: "",
        status: "valid",
        active: "valid",
        price: 0,
        description: "",
        fuelConsumption: "",
        location: "",
        colour: "",
        discount: 0,
        doors: 0,
        line: "",
        category: "",
        fuelType: "gasoline",
        typeOfBox: "handBook",
      },
      validationSchema: Yup.object({
        licensePlate: Yup.string()
          .min(3, "Min. 3 characters")
          .max(10, "Max. 10 characters")
          .required("Required"),
        brand: Yup.string()
          .min(3, "Min. 3 characters")
          .max(15, "Max. 15 characters")
          .required("Required"),
        // image: Yup.string(),
        status: Yup.string(),
        active: Yup.string(),
        price: Yup.number()
          .positive("Price must be greater than zero")
          .required("Required"),
        description: Yup.string()
          .min(30, "Min. 30 characters")
          .max(500, "Max. 500 characters")
          .required("Required"),
        fuelConsumption: Yup.string()
          .min(3, "Min. 3 characters")
          .max(15, "Max. 15 characters")
          .required("Required"),
        location: Yup.string()
          .min(10, "Min. 10 characters")
          .max(200, "Max. 200 characters")
          .required("Required"),
        colour: Yup.string()
          .min(3, "Min. 3 characters")
          .max(18, "Max. 18 characters")
          .required("Required"),
        discount: Yup.number()
          .min(0, "Min. 3 characters")
          .max(3, "Max. 15 characters"),
        doors: Yup.number()
          .positive("Doors must be greater than zero")
          .required("Required"),
        line: Yup.string()
          .min(2, "Min. 3 characters")
          .max(50, "Max. 15 characters")
          .required("Required"),
        category: Yup.string()
          .min(3, "Min. 3 characters")
          .max(15, "Max. 15 characters")
          .required("Required"),
        fuelType: Yup.string(),
        typeOfBox: Yup.string(),
      }),
      onSubmit: (values) => {
        console.log(values);
      },
    });
  return (
    <div>
      <div className="form_car">
        <form onSubmit={handleSubmit}>
          <label className="form_title">FORM TO CREATE A NEW CAR</label>
          <TextField
            fullWidth
            name="licensePlate"
            value={values.name}
            type="text"
            label="License Plate"
            margin="normal"
            onChange={handleChange}
            error={errors.licensePlate && touched.licensePlate ? true : false}
            helperText={
              errors.licensePlate && touched.licensePlate ? (
                <span>{errors.licensePlate} </span>
              ) : (
                false
              )
            }
          />
          <TextField
            fullWidth
            name="brand"
            value={values.brand}
            type="text"
            label="Brand"
            margin="normal"
            onChange={handleChange}
            error={errors.brand && touched.brand ? true : false}
            helperText={
              errors.brand && touched.brand ? (
                <span>{errors.brand} </span>
              ) : (
                false
              )
            }
            // {...getFieldProps("brand")}
            // className={`${touched.brand && errors.brand}`}
          />
          <fieldset>
            <legend>Image</legend>
            <Widget
              publicKey={"365750c83b2c5c083491"}
              name="image"
              value={values.image}
              previewStep
              clearable
              crop
              onChange={(info) => uploadFileChange(info)}
              onFileSelect={(file) => uploadFileSelect(file)}
            />
          </fieldset>
          <fieldset>
            <legend>Status </legend>
            <RadioGroup
              row
              name="status"
              value={values.status}
              style={{ marginLeft: "220px" }}
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
          <fieldset>
            <legend>Active </legend>
            <RadioGroup
              row
              name="active"
              value={values.active}
              style={{ marginLeft: "220px" }}
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
          <TextField
            fullWidth
            name="price"
            value={values.price}
            margin="normal"
            type="number"
            min="0.00"
            max="10000.00"
            step="0.01"
            label="Price"
            onChange={handleChange}
            error={errors.price && touched.price ? true : false}
            helperText={
              errors.price && touched.price ? (
                <span>{errors.price} </span>
              ) : (
                false
              )
            }
          />
          <TextField
            fullWidth
            name="description"
            type="text"
            label="Description"
            multiline
            maxRows={10}
            onChange={handleChange}
            error={errors.description && touched.description ? true : false}
            helperText={
              errors.description && touched.description ? (
                <span>{errors.description} </span>
              ) : (
                false
              )
            }
          />
          <TextField
            fullWidth
            name="fuelConsumption"
            value={values.fuelConsumption}
            type="text"
            label="Fuel Comsuption"
            margin="normal"
            onChange={handleChange}
            error={
              touched.fuelConsumption && errors.fuelConsumption ? true : false
            }
            helperText={
              touched.fuelConsumption && errors.fuelConsumption ? (
                <span>{errors.fuelConsumption} </span>
              ) : (
                false
              )
            }
          />
          <TextField
            fullWidth
            name="location"
            value={values.location}
            margin={"normal"}
            type="text"
            label="Location"
            onChange={handleChange}
            error={touched.location && errors.location ? true : false}
            helperText={
              touched.location && errors.location ? (
                <span>{errors.location} </span>
              ) : (
                false
              )
            }
          />
          <TextField
            fullWidth
            name="colour"
            value={values.colour}
            margin="normal"
            type="text"
            label="Colour"
            onChange={handleChange}
            error={touched.colour && errors.colour ? true : false}
            helperText={
              touched.colour && errors.colour ? (
                <span>{errors.colour} </span>
              ) : (
                false
              )
            }
          />
          <TextField
            fullWidth
            name="discount"
            type="number"
            min="0"
            max="100"
            label="Discount"
            margin="normal"
            onChange={handleChange}
            error={touched.discount && errors.discount ? true : false}
            helperText={
              touched.discount && errors.discount ? (
                <span>{errors.discount} </span>
              ) : (
                false
              )
            }
          />
          <TextField
            fullWidth
            name="doors"
            type="number"
            min="0"
            max="5"
            label="Doors"
            margin="normal"
            onChange={handleChange}
            error={touched.doors && errors.doors ? true : false}
            helperText={
              touched.doors && errors.doors ? (
                <span>{errors.doors} </span>
              ) : (
                false
              )
            }
          />
          <TextField
            fullWidth
            name="line"
            type="text"
            label="Line"
            margin="normal"
            onChange={handleChange}
            error={touched.line && errors.line ? true : false}
            helperText={
              touched.line && errors.line ? <span>{errors.line} </span> : false
            }
            {...getFieldProps("line")}
            className={`${touched.line && errors.line}`}
          />
          <TextField
            fullWidth
            name="category"
            type="text"
            label="Category"
            margin="normal"
            onChange={handleChange}
            error={touched.category && errors.category ? true : false}
            helperText={
              touched.category && errors.category ? (
                <span>{errors.category} </span>
              ) : (
                false
              )
            }
          />
          <TextField
            fullWidth
            select
            label="Type Of Fuel"
            value={values.fuelType}
            name="fuelType"
            margin="normal"
            onChange={handleChange}
            error={touched.fuelType && errors.fuelType ? true : false}
            helperText={
              touched.fuelType && errors.fuelType ? (
                <span>{errors.fuelType} </span>
              ) : (
                false
              )
            }
          >
            <MenuItem value="gasoline">Gasoline</MenuItem>
            <MenuItem value="gas">Gas</MenuItem>
            <MenuItem value="hibrid">Hibrid</MenuItem>
          </TextField>
          <TextField
            fullWidth
            select
            label="Type Of Box"
            value={values.typeOfBox}
            name="typeOfBox"
            margin="normal"
            onChange={handleChange}
            error={touched.typeOfBox && errors.typeOfBox ? true : false}
            helperText={
              touched.typeOfBox && errors.typeOfBox ? (
                <span>{errors.typeOfBox} </span>
              ) : (
                false
              )
            }
          >
            <MenuItem value="automatic">Automatic</MenuItem>
            <MenuItem value="handBook">HandBook</MenuItem>
            <MenuItem value="semiautomatic">Semiautomatic</MenuItem>
          </TextField>
          <Button color="primary" variant="contained" fullWidth type="submit">
            CREATE CAR
          </Button>
        </form>
      </div>
    </div>
  );
};
