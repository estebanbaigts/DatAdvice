import React from 'react';
import './navbar.css';

<style>@import url('https://fonts.googleapis.com/css2?family=Abel&family=Kanit:wght@300;400;500&display=swap');</style>

function NavBar() {
    return (
        <nav className="navbar"> 
            <ul className="nav-links">
                <li className="nav-item">
                    <a href="/" className="oval-button">Accueil</a>
                </li>
                <li className="nav-item">
                    <a href="/offres" className="oval-button">Nos offres</a>
                </li>
                <li className="nav-item">
                    <a href="/contacte" className="oval-button">Nous contacter</a>
                </li>
                <li className="nav-item">
                    <a href="/Qui-sommes-nous" className="oval-button">Qui sommes nous ?</a>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;
