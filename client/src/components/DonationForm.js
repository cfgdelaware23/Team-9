import {
    Box,
    Button,
    TextField,
    Typography,
  } from "@mui/material";
  import { Formik, Form } from "formik";
  import React from 'react';
  
  const DonationForm = () => {
    const initialValue = {
      name: "",
      amount: "0",
      creditCardNumber: "",
    };
  
    const handleSubmit = (values, props) => {
      console.log(values);
      // TO-DO: add backend call
      // fetch(`https://api.github.com/users/eunit99/repos`)
      //   .then(res => res.json())
      //   .then(
      //     (_) => {
      //       setOpenToast([true, false])
      //     },
      //     (error) => {
      //       setOpenToast([false, true])
      //     }
      //   )
      props.resetForm();
    };
  
    return (
      <Box m={5} p={3}>
        <Typography variant="h5">Donate Today!</Typography>
        <Formik
          initialValues={initialValue}
          onSubmit={handleSubmit}
        >
          {(props) => {
            const {name, amount, creditCardNumber } = props.values;
            return (
              <Form>
                <TextField
                  multiline
                  fullWidth
                  label="Enter Your Name"
                  name="name"
                  variant="outlined"
                  margin="dense"
                  value={name}
                  onChange={props.handleChange}
                  required
                />
                
                <TextField
                  multiline
                  fullWidth
                  label="Enter Donation Amount"
                  name="amount"
                  variant="outlined"
                  margin="dense"
                  value={amount}
                  onChange={props.handleChange}
                  required
                />
                
                <TextField
                  multiline
                  fullWidth
                  label="Enter Credit Card Number"
                  name="creditCardNumber"
                  variant="outlined"
                  margin="dense"
                  value={creditCardNumber}
                  onChange={props.handleChange}
                  required
                />
                <Button
                  variant="contained"
                  type="submit"
                  color="primary"
                  fullWidth
                  disabled={!props.dirty}
                >
                  Submit
                </Button>
              </Form>
            );
          }}
        </Formik>
      </Box>
    )
  }
  
  export default DonationForm;