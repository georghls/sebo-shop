import React from 'react';
import '../App.css';

export default function Footer() {
  return (
    <>
      <section className="cta-final">
        <h2>Sua estante tem espaço para uma história nova</h2>
        <button className="btn-primario">Criar minha conta</button>
      </section>

      <footer className="footer-completo">
        <div className="footer-grid">
          {/* Coluna 1: Marca & Manifesto */}
          <div className="footer-col brand-col">
            <div className="logo">alfa<span>rrábio</span></div>
            <p className="footer-desc">
              O sebo digital que conecta leitores, bibliófilos e sebos independentes por todo o Brasil. Onde cada exemplar carrega memória e história.
            </p>
          </div>

          {/* Coluna 2: Navegação do Acervo */}
          <div className="footer-col">
            <h4 className="footer-title">Acervo</h4>
            <ul>
              <li><a href="#destaques">Recém-chegados</a></li>
              <li><a href="#categorias">Primeiras Edições</a></li>
              <li><a href="#categorias">Literatura Brasileira</a></li>
              <li><a href="#categorias">Raridades & Autógrafos</a></li>
              <li><a href="#categorias">Coleções Completas</a></li>
            </ul>
          </div>

          {/* Coluna 3: Ecossistema */}
          <div className="footer-col">
            <h4 className="footer-title">Plataforma</h4>
            <ul>
              <li><a href="#como-funciona">Como Funciona</a></li>
              <li><a href="#">Anunciar um Livro</a></li>
              <li><a href="#">Sebos Parceiros</a></li>
              <li><a href="#">Garantia de Autenticidade</a></li>
              <li><a href="#">Comunidade Leitora</a></li>
            </ul>
          </div>

          {/* Coluna 4: Institucional & Ajuda */}
          <div className="footer-col">
            <h4 className="footer-title">Suporte & Sobre</h4>
            <ul>
              <li><a href="#">Nossa História</a></li>
              <li><a href="#">Manifesto Bibliófilo</a></li>
              <li><a href="#">Central de Ajuda</a></li>
              <li><a href="#">Prazos & Envio</a></li>
              <li><a href="#">Contato</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copy">
            © 2026 Alfarrábio · Todos os direitos reservados.
          </div>
          <div className="footer-links">
            <a href="#">Termos de Uso</a>
            <span>·</span>
            <a href="#">Privacidade</a>
            <span>·</span>
            <a href="#">Skoob</a>
            <span>·</span>
            <a href="#">Instagram</a>
          </div>
        </div>
      </footer>
    </>
  );
}

