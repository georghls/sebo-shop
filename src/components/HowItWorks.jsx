import React from 'react';
import '../App.css';

export default function HowItWorks() {
  return (
    <section id="como-funciona">
      <div className="section-head">
        <span className="eyebrow">Processo</span>
        <h2>Da sua estante para a de outra pessoa</h2>
      </div>
      <div className="passos">
        <div className="passo">
          <span className="num">01</span>
          <h3>Catalogue</h3>
          <p>Fotografe, descreva o estado de conservação e defina o preço. Sua ficha fica pronta em minutos.</p>
        </div>
        <div className="passo">
          <span className="num">02</span>
          <h3>Negocie</h3>
          <p>Converse direto com quem quer comprar, combine forma de entrega e receba o pagamento com segurança.</p>
        </div>
        <div className="passo">
          <span className="num">03</span>
          <h3>Despache</h3>
          <p>Embale, envie e acompanhe a entrega. Seu livro ganha um novo endereço.</p>
        </div>
      </div>
    </section>
  );
}
