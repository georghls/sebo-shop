import React from 'react';
import '../App.css';

export default function Categories() {
  const categories = [
    { name: "Literatura brasileira", rotation: "-3deg" },
    { name: "Raridades & 1ª edição", rotation: "2deg" },
    { name: "Didáticos & acadêmicos", rotation: "-1deg" },
    { name: "HQs & mangás", rotation: "3deg" },
    { name: "Poesia", rotation: "-2deg" },
    { name: "Infantojuvenil", rotation: "1deg" },
    { name: "Ficção científica", rotation: "-3deg" }
  ];

  return (
    <section id="categorias" className="categorias-wrap">
      <div className="section-head">
        <span className="eyebrow">Acervo</span>
        <h2>Carimbadas por categoria</h2>
      </div>
      <div className="carimbos-grid">
        {categories.map((cat, index) => (
          <span 
            key={index} 
            className="carimbo-tag" 
            style={{"--r": cat.rotation}}
          >
            {cat.name}
          </span>
        ))}
      </div>
    </section>
  );
}
