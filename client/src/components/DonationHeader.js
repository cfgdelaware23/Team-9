import React from 'react'
import '../css/App.css'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import DonationForm from './DonationForm';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
  };

function DonationHeader() {
    const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
        <div className='headerRight'>
            <button 
                className="headerButton" 
                type="button"
                onClick={handleOpen} 
            >
                Donate!
            </button>
        </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <DonationForm />
        </Box>
      </Modal>
    </>
  )
}

export default DonationHeader