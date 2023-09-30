import {
  Box,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
  Rating
} from "@mui/material";
import { Formik, Form, ErrorMessage } from "formik";
import React from 'react';
import * as Yup from 'yup';

const FeedbackForm = ({ setOpenToast }) => {
  const initialValue = {
    rating: 0,
    like: "",
    notLike: "",
    suggestions: "",
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
    <a id="feedbackForm">
      <Grid container>
        <Grid item sm={3} xs={false}></Grid>
        <Grid item sm={6} xs={12}>
          <Paper>
            <Box m={5} p={3}>
              <Typography variant="h5">Give us your feedback!</Typography>
              <Formik
                initialValues={initialValue}
                onSubmit={handleSubmit}
              >
                {(props) => {
                  const { rating, like, notLike, suggestions } = props.values;
                  return (
                    <Form>
                      <Typography>Rate your experience at Better Grocery</Typography>
                      <Rating 
                        label="rating"
                        name="rating"
                        value={Number(rating)}
                        precision={0.5}
                        onChange={props.handleChange}
                        required
                      />
                      
                      <TextField
                        multiline
                        fullWidth
                        label="What did you like about Better Grocery?"
                        name="like"
                        variant="outlined"
                        margin="dense"
                        value={like}
                        onChange={props.handleChange}
                      />
                      
                      <TextField
                        multiline
                        fullWidth
                        label="What did you not like about Better Grocery?"
                        name="notLike"
                        variant="outlined"
                        margin="dense"
                        value={notLike}
                        onChange={props.handleChange}
                      />
  
                      <TextField
                        multiline
                        fullWidth
                        label="Any other suggestions?"
                        name="suggestions"
                        variant="outlined"
                        margin="dense"
                        value={suggestions}
                        onChange={props.handleChange}
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
          </Paper>
        </Grid>
        <Grid item sm={3} xs={false}></Grid>
      </Grid>
    </a>
 
  )
}

export default FeedbackForm;