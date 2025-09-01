import React from 'react';
import "./FaleConosco.scss";


export default function FaleConosco() {
  return (
    <section className="fale-section">
      <div className="fale-overlay"></div>

      <div className="container h-100">
        <div className="row align-items-center h-100 gy-4">
          {/* Formulário */}
          <div className="col-md-6 text-white">
            <h2 className="fale-title">Fale conosco</h2>
            <p className="fale-subtitle">
              Restou alguma dúvida ou quer entrar em contato?
            </p>

            <div className="fale-form bg-dark bg-opacity-50 p-4 rounded">
              <h5 className="mb-1">Mande uma mensagem</h5>
              <h3 className="mb-3">Contato direto</h3>
              <form>
                <label htmlFor="nome" className="form-label">Seu nome</label>
                <input
                  type="text"
                  id="nome"
                  className="form-control mb-3"
                  placeholder="Escreva aqui"
                />

                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  className="form-control mb-3"
                  placeholder="exemplo@gmail.com"
                />

                <label htmlFor="assunto" className="form-label">Assunto</label>
                <input
                  type="text"
                  id="assunto"
                  className="form-control mb-3"
                  placeholder="Sobre o que você deseja falar"
                />

                <label htmlFor="mensagem" className="form-label">Mensagem</label>
                <textarea
                  id="mensagem"
                  className="form-control mb-3"
                  rows="4"
                  placeholder="Detalhe a sua mensagem"
                ></textarea>

                <button type="submit" className="btn btn-light">Enviar</button>
              </form>
            </div>
          </div>

          {/* Slogan */}
          <div className="col-md-6 text-white text-md-end">
            <h1 className="fale-slogan">
              Tecnologia no campo,<br />
              inteligência na decisão
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
