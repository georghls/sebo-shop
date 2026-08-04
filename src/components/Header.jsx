import React from 'react';
import '../App.css';

export default function Header() {
  return (
    <header>
      <div className="logo">alfa<span>rrábio</span></div>
      <nav>
        <a href="#como-funciona">Como funciona</a>
        <a href="#categorias">Categorias</a>
        <a href="#destaques">Livros</a>
        <a href="#" className="btn-entrar">Entrar</a>
      </nav>
    </header>
  );
}
