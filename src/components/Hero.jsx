import React from 'react';
import '../App.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="ficha">
        <div className="carimbo">acervo<br/>aberto</div>
        <div className="ficha-codigo">FICHA Nº 0001 — CATÁLOGO GERAL</div>
        <h1>Todo livro usado<br/>já foi a casa de alguém.</h1>
        <p className="sub">Compre e venda livros de segunda mão com quem entende de estante. Cada exemplar chega com sua própria história — e um preço justo.</p>
        <div className="ficha-linhas">
          <div><span>Exemplares no acervo</span><span>+ 42.000</span></div>
          <div><span>Sebos parceiros</span><span>318 cidades</span></div>
        </div>
        <div className="hero-cta">
          <a href="#destaques" className="btn-primario">Explorar acervo</a>
          <a href="#como-funciona" className="btn-secundario">Anunciar um livro</a>
        </div>
      </div>
    </section>
  );
}
