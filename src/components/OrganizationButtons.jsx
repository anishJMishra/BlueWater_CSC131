import React, { useState } from 'react';
import { Box, Typography, Button, Modal } from '@mui/material';
import LoginModal from "./LoginModal";
import FDAIcon from "../images/fda-logo.jpeg";
import JHIcon from "../images/JaneHopkins.jpg";
import BavariaIcon from "../images/Bavaria.jpg";

const OrganizationButtons = (props) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Box>
                <Typography
                    sx={{ color: "#fff", bgcolor: "#1b76d2" }}
                    variant = "h4"
                >
                    {props.name}
                </Typography>
                <Button
                    sx = {{ bgcolor: "#003987" }}
                    variant = "contained"
                    onClick={handleOpen}
                >
                    <Modal
                    open = {open}
                    onClose = {handleClose}
                    >
                    <Box 
                        position = "absolute"
                        top = "25%"
                        left = "36%"
                        sx = {{
                        backgroundColor: "#003987"
                        }}
                        >
                        <LoginModal name = {props.name} />
                    </Box>
                    </Modal>
                    <img src={props.logo} style={{ width: "200px",
                    height: "150px" }}/>
                </Button>  
            </Box>
        </div>
  )
}

export default OrganizationButtons