import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiDjango,
  SiBootstrap,
  SiReact,
  SiMysql,
  SiPostman,
  SiFlask,
} from 'react-icons/si';


import './projetos.css'

function Projetos () {
    return (
        <section id='projetos'>
            <div className="project-title">
                <h4>Projetos</h4>
            </div>
            {/*
            <div className="namedesk">
                <h4 className='desk'>Destaques</h4>
            </div>
            */}
            <div className="project">
            
            <div className="BOX" id='20'>
                    <div className="details">
                        <p className="nameProject">Livraria Digital</p>
                        </div>
                        <div className='Projeto-Container'>
                            <div className="img-wrapper">
                                
                            <a href="https://github.com/Gustavodev856/LivrariaInfinite"
                            target="_blank"
                            rel="noopener noreferrer">
                            <img src="/public/LivrariaDigi.png" className='IMG' alt="" />
                             <div className="blur-backgrounk"></div>
                                <ul className='mini-language'>
                                    <li><SiReact size='28' /></li>
                                    <li><SiTypescript size='28' /></li>
                                    <li><SiPython size='28' /></li>
                                    <li><SiFlask size='28' /></li>
                                    <li><SiMysql size='28' /></li>
                                    <li><SiCss3 size='28' /></li>
                                    <li><SiPostman size='28' /></li>
                                </ul>
                             <p className='overlay-text'>📚 Livraria Infinite é uma aplicação web desenvolvida com o objetivo de
                                 simular o funcionamento de uma livraria digital. A proposta é oferecer uma interface amigável
                                  para o usuário visualizar, cadastrar e gerenciar livros, utilizando tecnologias modernas e boas práticas de desenvolvimento web full stack.
                                  O frontend foi desenvolvido com React.js e TypeScript, proporcionando uma estrutura robusta, tipagem segura e componentes reutilizáveis.
                                  O backend foi construído em Python, utilizando o microframework Flask, responsável pela criação da API RESTful que gerencia as requisições e integra com o banco de dados MySQL. A estilização foi feita com CSS3, garantindo uma interface responsiva e visual agradável em diferentes dispositivos. Para testes de rotas e integração, foi utilizada a ferramenta Postman.
                                  Entre as funcionalidades implementadas estão a visualização de livros cadastrados, cadastro de novos livros,
                                  e a visualização detalhada de cada item. Toda a comunicação entre o frontend e o backend é feita por meio de requisições 
                                  HTTP (GET, POST, PUT, DELETE), com persistência de dados no banco MySQL. A aplicação também conta com animações suaves, 
                                  responsividade e foco na experiência do usuário.
                                  O projeto foi pensado para servir como uma base sólida para quem deseja entender o fluxo completo de uma aplicação 
                                  web moderna, integrando frontend, backend e banco de dados com tecnologias reais do mercado. 13 de Março de 2025</p>
                                  </a>
                             
                             </div>
                            </div> 
            </div>
              
           <div className="bird" id="1">
  <div className="details">
    <p className="nameProject">Relógio Digital</p>
  </div>
  <div className="Projeto-Container">
    <div className="img-wrapper">
      <a
        href="https://github.com/Gustavodev856/relogio" 
        target="_blank"
        rel="noopener noreferrer"
      >
         <img src="/public/RelogioDigi.png" className='IMG' alt="" />
        <div className="blur-backgrounk"></div>
        <ul className="mini-languagem">
          <li><SiHtml5 size="28" /></li>
          <li><SiCss3 size="28" /></li>
          <li><SiJavascript size="28" /></li>
        </ul>
        <p className="overlay-text">
         🕒 Relógio Digital é uma aplicação web simples e 
         funcional desenvolvida com HTML5, CSS3 e JavaScript, 
         com o objetivo de exibir a hora atual em tempo real. 
         O projeto apresenta um design limpo e responsivo, 
         ideal para quem está começando no desenvolvimento 
         front-end e deseja entender conceitos básicos de manipulação 
         do DOM e atualizações dinâmicas. 
         A interface foi pensada para ser clara e intuitiva, atualizando 
         os segundos automaticamente e funcionando corretamente em 
         diferentes tamanhos de tela. É um excelente exemplo de 
         projeto prático para reforçar fundamentos da web.
          <br />
          10 de Fevereiro de 2025
        </p>
      </a>
      </div>
    </div>
  </div>
</div>    

<div className="projects-container">

    <div className="brd" id="1">
  <div className="details">
    <p className="nameProject">Replica Spotify</p>
  </div>
  <div className="Projeto-Container">
    <div className="img-wrapper">
      <a
        href="https://github.com/Gustavodev856/replica-spotify" 
        target="_blank"
        rel="noopener noreferrer"
      >
         <img src="/public/spotfy.png" className='IMG' alt="" />
        <div className="blur-backgrounk"></div>
        <ul className="mini-lenguagem">
          <li><SiBootstrap size="28" /></li>
          <li><SiCss3 size="28" /></li>
          <li><SiJavascript size="28" /></li>
        </ul>
        <p className="overlay-text">
         O projeto replica-spotify é uma recriação visual 
         da interface do Spotify desenvolvida com HTML, CSS 
         (usando Bootstrap) e JavaScript. Ele simula a aparência 
         e alguns comportamentos do player da plataforma original, 
         com foco em responsividade e interatividade básica, 
         servindo como prática de front-end e design web inspirado 
         em aplicações reais.
          <br />
          10 de Fevereiro de 2025
        </p>
      </a>
      </div>
    </div>
  </div>

  <div className="bd" id="1">
  <div className="details">
    <p className="nameProject">Financeiro Tracker</p>
  </div>
  <div className="Projeto-Container">
    <div className="img-wrapper">
      <a
        href="https://github.com/Gustavodev856/Financeiro-tracker/tree/main" 
        target="_blank"
        rel="noopener noreferrer"
      >
         <img src="/public/FinanceiroTra.png" className='IMG' alt="" />
        <div className="blur-backgrounk"></div>
        <ul className="mini-lenguagem">
          <li><SiReact size="28" /></li>
          <li><SiCss3 size="28" /></li>
          <li><SiJavascript size="28" /></li>
        </ul>
        <p className="overlay-text">
         O Financeiro-tracker é uma aplicação web desenvolvida para 
         ajudar os usuários a gerenciar suas finanças pessoais de 
         maneira simples e eficiente, permitindo o acompanhamento de 
         entradas e saídas financeiras e facilitando o controle do 
         orçamento mensal. Entre suas funcionalidades principais 
         estão o cadastro de transações, onde o usuário pode 
         adicionar receitas e despesas informando valores, 
         categorias e datas; a visualização do saldo atual, que 
         exibe o total de receitas, despesas e o saldo final com 
         base nas transações cadastradas; uma lista de movimentações 
         que apresenta o histórico detalhado das transações, 
         possibilitando editar ou remover registros; filtros e 
         categorias para organizar as transações por tipo e 
         facilitar a análise dos gastos e ganhos; além de uma 
         interface intuitiva, amigável e responsiva para facilitar 
         o uso em diferentes dispositivos. 
         O projeto foi desenvolvido utilizando React como framework 
         principal para a construção da interface dinâmica, 
         JavaScript para a lógica da aplicação, CSS para a 
         estilização e layout visual, e utiliza o GitHub para 
         versionamento e hospedagem do código fonte. O objetivo do 
         Financeiro-tracker é fornecer uma solução prática para que 
         qualquer pessoa possa acompanhar suas finanças pessoais, 
         promovendo melhor organização financeira e auxiliando no 
         planejamento de gastos e investimentos.
          <br />
          10 de Fevereiro de 2025
        </p>
      </a>
      </div>
    </div>
  </div>
</div>

</section>
    )
}

export default Projetos