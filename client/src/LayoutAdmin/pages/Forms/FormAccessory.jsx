import { Formik, Field, Form, useFormik, ErrorMessage } from "formik";
import React, { useState } from "react";
import { Widget } from "@uploadcare/react-widget";
import * as Yup from "yup";
import "./Form.css";
import {
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
  Button,
} from "@mui/material";

export const FormAccessory = () => {
  const submitForm = (values) => {};
  const onChange = (info) => {
    setValues.image = info.originalUrl
    console.log(info.originalUrl)
    console.log(values.image);
  };
  const onFileSelect = (file) => {
    console.log("File changed: ", file);
    if (file) {
      file.done((info) => console.log("File uploaded: ", info));
    }
  };
  const bla = (file) => {
    if(!file){
      console.log("File removed from widget")
    }
    file.done((fileInfo)=> {
      setValues.image(fileInfo.originalUrl)
      console.log("done")
    })
    }

  const { errors, touched, getFieldProps, values,setValues, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        name: "",
        price: 0,
        description: "",
        image: "",
        status: "valid",
        discount: 0,
      },
      validationSchema: Yup.object({
        name: Yup.string("Enter the accessory")
          .min(3, "Min. 3 characters")
          .max(50, "Max. 50 characters")
          .required("Required"),
        price: Yup.number()
          .positive("Price must be greater than zero")
          .required("Required"),
        description: Yup.string()
          .min(10, "Min. 10 characters")
          .max(300, "Max. 300 characters")
          .required("Required"),
        // image: Yup.string().required("Required"),
        status: Yup.string(),
        discount: Yup.number(),
      }),
      onSubmit: (values) => {
        console.log(values);
        alert(JSON.stringify(values, null, 2));
      },
    });
  return (
    <div className="form_accessory">
      <label className="form_title">CREATE NEW ACCESSORY</label>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          name="name"
          value={values.name}
          type="text"
          variant="outlined"
          label="Name"
          margin="normal"
          onChange={handleChange}
          error={errors.name && touched.name ? true : false}
          helperText={
            errors.name && touched.name ? <span>{errors.name} </span> : false
          }
        />
        <TextField
          fullWidth
          name="price"
          value={values.price}
          type="number"
          varient="filled"
          min="0.00"
          max="10000.00"
          step="0.01"
          label="Price"
          margin="normal"
          onChange={handleChange}
          error={errors.price && touched.price ? true : false}
          helperText={
            errors.price && touched.price ? <span>{errors.price} </span> : false
          }
        />
        <TextField
          fullWidth
          name="description"
          value={values.description}
          multiline
          maxRows={10}
          margin="normal"
          style={{ backgroundColor: "whitesmoke" }}
          label="Description"
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
        <fieldset>
          <legend>Image</legend>
          <Widget
            className="uploader"
            publicKey={"31565ad8e1a6027b4914"}
            name="image"
            value={values.image}
            clearable
            crop
            previewStep
            margin="normal"
            onChange={onChange}
            onFileSelect={onFileSelect}
          />
          {/* {console.log("holis",values.image)} */}
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
        <TextField
          fullWidth
          name="discount"
          value={values.discount}
          type="number"
          min="0"
          max="100"
          label="Discount"
          margin="normal"
          onChange={handleChange}
          error={errors.discount && touched.discount ? true : false}
          helperText={
            errors.discount && touched.discount ? (
              <span>{errors.discount} </span>
            ) : (
              false
            )
          }
        />
        <Button
          onClick={() => console.log("image",values.image)}
          color="primary"
          variant="contained"
          fullWidth
          type="submit"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};
