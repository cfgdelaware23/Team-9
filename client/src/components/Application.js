import {
Box,
Grid,
Paper,
TextField,
Typography,
} from "@mui/material";
import { Formik, Form } from "formik";
import React from 'react';
const Application = () => {
    const initialValue = {
        first: "",
        firstName: "",
        lastName: "",
        address: "",
        snap: "",
        phoneNumber: "",
        email: "",
        age: 0,
        familySize: 1,
    };
    const handleSubmit = (values, props) => {
        console.log(values);
        // TO-DO: add backend call
        props.resetForm();
    };
    return (
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
                const { firstName, lastName, address, snap, phoneNumber, email, age, familySize} = props.values;
                return (
                <Form>
                <Typography>Rate your experience at Better Grocery</Typography>
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
                />
                <TextField
                multiline
                fullWidth
                label = "SNAP:"
                variant = "outlined"
                margin = "dense"
                name = "snap"
                value = {snap}
                onChange = {props.handleChange}
                />
                <TextField
                multiline
                fullWidth
                label = "Phone Number:"
                variant = "outlined"
                margin = "dense"
                name = "phoneNumber"
                value = {phoneNumber}
                onChange = {props.handleChange}
                />
                <TextField
                multiline
                fullWidth
                label = "Email:"
                variant = "outlined"
                margin = "dense"
                name = "email"
                value = {email}
                onChange = {props.handleChange}
                />
                <TextField
                multiline
                fullWidth
                label = "Age:"
                variant = "outlined"
                margin = "dense"
                name = "age"
                value = {age}
                onChange = {props.handleChange}
                />
                <TextField
                multiline
                fullWidth
                label = "Family Size:"
                variant = "outlined"
                margin = "dense"
                name = "familySize"
                value = {familySize}
                onChange = {props.handleChange}
                />
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
export default Application;