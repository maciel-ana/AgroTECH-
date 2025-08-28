import React, { useState } from 'react';
import './Header.scss'

function Header({ scrollToAbout, scrollToProject, scrollToQuestions}) {
    const [menuAtivo, setMenuAtivo] = useState(false);

    const toggleMenu = () => {
        setMenuAtivo(!menuAtivo);
    };

    return (
        <>
         <header className={`header-navbar ${menuAtivo ? 'header-ativo' : ''}`}>
            <div className="logo_title">
                <h3>AgroTECH</h3>
            </div>

            <nav className={`navbar ${menuAtivo ? 'navbar-ativa' : ''}`}>
                <a onClick={scrollToAbout}>Sobre</a>
                <a onClick={scrollToProject}>Nosso Projeto</a>
                <a onClick={scrollToQuestions}>Perguntas</a>
                <a href='#' className="search"><span className="material-symbols-outlined">search</span></a>
            </nav>
        </header>
        </>
    );
}

export default Header;