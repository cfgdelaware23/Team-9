import {
  Box,
  Grid,
  Paper,
  TextField,
  Typography,
  Button,
  Alert
} from "@mui/material";

import { Formik, Form } from "formik";
import * as Yup from 'yup';
import React, { useState } from 'react';

const Application = () => {
  const [statusCode, setStatusCode] = useState(0)
  const [memberId, setMemberId] = useState(-1)
  
  const initialValue = {
    firstName: "",
    lastName: "",
    address: "",
    snap: "",
    phoneNumber: "",
    email: "",
    age: "",
    familySize: "",
  };
  const handleSubmit = async (values, props) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values)
    };
    
    const response = await fetch('http://127.0.0.1:5000/add_user', requestOptions);
    setStatusCode(response.status)
    const data = await response.json();
    setMemberId(data.membership_id)
    props.resetForm();
  };

  const validateSchema = Yup.object().shape({
    firstName: Yup.string()
      .max(50, 'Too Long!')
      .required('Required'),
    lastName: Yup.string()
      .max(50, 'Too Long!')
      .required('Required'),
    address: Yup.string()
      .max(200, 'Too Long!')
      .required('Required'),
  });

  return (
  <Grid container>
    <Grid item sm={3} xs={false}></Grid>
      <Grid item sm={6} xs={12}>
        <Paper>
          <Box m={5} p={3}>
            <Typography variant="h5">Get Discounts!</Typography>
            <Formik
              initialValues={initialValue}
              onSubmit={handleSubmit}
              validationSchema={validateSchema}
              >
              {(props) => {
                const { firstName, lastName, address, snap, phoneNumber, email, age, familySize} = props.values;
                return (
                  <Form>
                    <TextField
                      fullWidth
                      label = "First Name:"
                      variant = "outlined"
                      margin = "dense"
                      name = "firstName"
                      value = {firstName}
                      onChange = {props.handleChange}
                      required
                    />
                    <TextField
                      fullWidth
                      label = "Last Name:"
                      variant = "outlined"
                      margin = "dense"
                      name = "lastName"
                      value = {lastName}
                      onChange = {props.handleChange}
                      required
                    />
                    <TextField
                      multiline
                      fullWidth
                      label = "Address:"
                      variant = "outlined"
                      margin = "dense"
                      name = "address"
                      value = {address}
                      onChange = {props.handleChange}
                      required
                    />
                    <TextField
                      fullWidth
                      label = "SNAP:"
                      variant = "outlined"
                      margin = "dense"
                      name = "snap"
                      value = {snap}
                      onChange = {props.handleChange}
                    />
                    <TextField
                      fullWidth
                      label = "Phone Number:"
                      variant = "outlined"
                      margin = "dense"
                      name = "phoneNumber"
                      value = {phoneNumber}
                      onChange = {props.handleChange}
                    />
                    <TextField
                      fullWidth
                      label = "Email:"
                      variant = "outlined"
                      margin = "dense"
                      name = "email"
                      value = {email}
                      onChange = {props.handleChange}
                    />
                    <TextField
                      fullWidth
                      label = "Age:"
                      variant = "outlined"
                      margin = "dense"
                      name = "age"
                      value = {age}
                      onChange = {props.handleChange}
                    />
                    <TextField
                      fullWidth
                      label = "Family Size:"
                      variant = "outlined"
                      margin = "dense"
                      name = "familySize"
                      value = {familySize}
                      onChange = {props.handleChange}
                    />
                    <Button
                      variant="contained"
                      type="submit"
                      color="primary"
                      fullWidth
                      disabled={!props.isValid || !props.dirty}
                    >
                      Submit
                    </Button>
                  </Form>
                );
              }}
            </Formik>
          </Box>
          {statusCode === 401 && <Alert severity="error">Error: User already exists!</Alert>}
          {statusCode === 201 && <Alert severity="success">You have been signed up, your member ID is {memberId}!</Alert>}
        </Paper>
      </Grid>
      <Grid item sm={3} xs={false}></Grid>
    </Grid>
  )
}
export default Application;