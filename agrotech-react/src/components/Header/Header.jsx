import React from 'react';
import './Header.scss'

function Header() {
    return (
        <>
        <header className='header-navbar'>
            <div className="logo_title">
                <h3>AgroTECH</h3>
            </div>
            <nav className="navbar">
                <a href='#'>Início</a>
                <a href='#'>Sobre</a>
                <a href='#'>Quem Somos</a>
                <a href='#'>Contato</a>
                <a href='#' className="search"><span className="material-symbols-outlined">search</span></a>
            </nav>
        </header>
        </>
    );
}

export default Header;