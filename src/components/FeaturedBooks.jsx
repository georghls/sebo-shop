import React from 'react';
import '../App.css';

export default function FeaturedBooks() {
  const books = [
    {
      code: "COD. LT-2291 · LITERATURA",
      title: "Grande Sertão: Veredas",
      author: "João Guimarães Rosa",
      price: "R$ 38",
      state: "Bom estado",
      cover: "/assets/grande-sertao-veredas.jpg"
    },
    {
      code: "COD. PO-0847 · POESIA",
      title: "A Rosa do Povo",
      author: "Carlos Drummond de Andrade",
      price: "R$ 29",
      state: "Marcas de leitura",
      cover: "/assets/a-rosa-do-povo.jpg"
    },
    {
      code: "COD. RA-0112 · RARIDADE",
      title: "Dom Casmurro",
      author: "Machado de Assis",
      price: "R$ 210",
      state: "Colecionador",
      cover: "/assets/dom-casmurro.jpg"
    },
    {
      code: "COD. FC-1560 · FICÇÃO",
      title: "Solaris",
      author: "Stanisław Lem",
      price: "R$ 32",
      state: "Ótimo estado",
      cover: "/assets/solaris.jpg"
    }
  ];

  return (
    <section id="destaques">
      <div className="section-head">
        <span className="eyebrow">Recém-chegados</span>
        <h2>Últimas fichas do acervo</h2>
      </div>
      <div className="livros-grid">
        {books.map((book, idx) => (
          <div className="livro-card" key={idx}>
            <div className="cod">{book.code}</div>
            <div className="livro-capa-wrap">
              <img src={book.cover} alt={book.title} className="livro-capa-img" />
            </div>
            <h3>{book.title}</h3>
            <p className="autor">{book.author}</p>
            <div className="preco-row">
              <span className="preco">{book.price}</span>
              <span className="estado">{book.state}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
