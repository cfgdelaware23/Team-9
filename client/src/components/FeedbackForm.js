import {
  Box,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
  Rating
} from "@mui/material";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useState } from "react";
import React from 'react';
import '../css/FeedbackForm.css'

// rate experience 
// what did you like 
// what did you not like 
// any suggestions

const FeedbackForm = () => {
  const initialValue = {
    rate: 0,
    like: "",
    notLike: "",
    suggestions: "",
  };

  const handleSubmit = (values, props) => {
    console.log(values);
    alert(JSON.stringify(values));

    props.resetForm();
  };

  return (
    <Grid container>
      <Grid item sm={3} xs={false}></Grid>
      <Grid item sm={6} xs={12}>
        <Paper>
          <Box m={5} p={3}>
            <Typography variant="h5">Basic Formik Form Validation</Typography>
            <Formik
              initialValues={initialValue}
              // validationSchema={YupValidation}
              onSubmit={handleSubmit}
            >
              {(props) => {
                const { rate, like, notLike, suggestions } = props.values;
                return (
                  <Form>
                    {/* First Way */}
                    <Rating 
                      label="rating"
                      name="half-rating"
                      defaultValue={rate}
                      precision={0.5}
                      required
                    />
                    <TextField
                      label="What did you like about Better Grocery?"
                      name="like"
                      fullWidth
                      variant="outlined"
                      margin="dense"
                      value={like}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                    />
                    {/* Second Way */}
                    <Field
                      as={TextField}
                      label="What did you not like about Better Grocery?"
                      type="notLike"
                      name="notLike"
                      fullWidth
                      variant="outlined"
                      margin="dense"
                    />

                    <Field
                      as={TextField}
                      label="Any other suggestions?"
                      name="suggestions"
                      fullWidth
                      variant="outlined"
                      margin="dense"
                    />

                    <Button
                      variant="contained"
                      type="submit"
                      color="primary"
                      fullWidth
                    >
                      Submit
                    </Button>
                  </Form>
                );
              }}
            </Formik>
          </Box>
        </Paper>
      </Grid>
      <Grid item sm={3} xs={false}></Grid>
    </Grid>
  )
}
  // <div className='form-box'>
  //   <h2>Give us your feedback!</h2>
  //   <form>
  //     <div className = "feedback">
  //       <label>What did you like about Better Grocery?</label>
  //       <textarea />  
  //       <label>What did you not like about Better Grocery?</label>      
  //       <textarea />
  //       <label>Any other suggestions?</label>
  //       <textarea placeholder="suggestions"/>
  //     </div>
  //     <button type = "submit" id= "submitBtn" className = "submitBtn"> submit</button>
  //   </form>
  // </div>


export default FeedbackForm;