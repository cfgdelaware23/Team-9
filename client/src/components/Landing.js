import React, { useState } from 'react';
import Signup from './Signup';
import Aboutus from './Aboutus';
import FeedbackForm from './FeedbackForm';
import { Alert, Snackbar } from "@mui/material";

const Landing = () => {
  const [openToast, setOpenToast] = useState([false, false]);

  return (
    <div>
      <Signup />
      <Aboutus />
      <FeedbackForm setOpenToast={setOpenToast}/>

      <Snackbar
        autoHideDuration={3000}
        onClose={() => setOpenToast([false, false])}
        open={openToast[0]}
        anchorOrigin={{
            vertical: "bottom",
            horizontal: "center"
          }}
        key="bottomcenter1"
      >
        <Alert
          severity="success"
          sx={{ width: '100%' }}
          onClose={() => setOpenToast([false, false])}
        >
          Thank you for your feedback!
        </Alert>
      </Snackbar>

      <Snackbar
        autoHideDuration={3000}
        onClose={() => setOpenToast([false, false])}
        open={openToast[1]}
        anchorOrigin={{
            vertical: "bottom",
            horizontal: "center"
          }}
        key="bottomcenter2"
      >
        <Alert
          severity="error"
          sx={{ width: '100%' }}
          onClose={() => setOpenToast([false, false])}
        >
          An error happened while submitting your feedback. Please try again.
        </Alert>
      </Snackbar>
    </div>
  )
}

export default Landing