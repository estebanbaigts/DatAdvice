import React from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';
import './navbar.css'; // Import a separate CSS file for styling

function NavBar() {
    return (
        <>
            <MDBBtn rounded>Primary</MDBBtn>
            <MDBBtn rounded className='mx-2' color='secondary'>
                Acceuil
            </MDBBtn>
            <MDBBtn rounded color='success'>
                Nos offres
            </MDBBtn>
            <MDBBtn rounded className='mx-2' color='danger'>
                Nous contacter
            </MDBBtn>
            <MDBBtn rounded color='warning'>
                Qui sommes nous ?
            </MDBBtn>
        </>
    );
}

export default NavBar;
