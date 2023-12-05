import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './navbar.css'; // Import a separate CSS file for styling

function NavBar() {
    return (
        <Stack spacing={2} direction="row" className="rounded-buttons">
            <Button variant="contained" color="primary" className="custom-button">
                Accueil
            </Button>
            <Button variant="contained" color="primary" className="custom-button">
                Nos offres
            </Button>
            <Button variant="contained" color="primary" className="custom-button">
                Nous contacter
            </Button>
            <Button variant="contained" color="primary" className="custom-button">
                Qui sommes nous ?
            </Button>
        </Stack>
    );
}

export default NavBar;
