import Habilidade from './Habilidade'
import Projetos from './Projetos'
import './style.css'
import Footer from './Footer'

function Conteudo() {
    return (
       <section id='sobre' className='conteudo-container'>
        <div className="info">
            <div className="info01">
                <h1 className='h1'>Olá, Eu sou</h1>
                <span>Gustavo Vasconcelos :)</span>
                <p className='prgf'>Desenvolvedor Front-End | React.js | TypeScript | Vue.js</p>
            </div>
            </div>
            <div className="actions">
                <a href="/Gustavo-Vasconcelos.pdf" 
                download="Gustavo-Vasconcelos.pdf"
                className='link'>Download CV</a>

                <a href="https://www.linkedin.com/in/gustavo-vasconcelos-2881b8272/"
                   target="_blank"
                   rel="noopener noreferrer"
                   className='link'>Linkedin</a>
                   
                <a href="https://github.com/Gustavodev856"
                    target="_blank"
                    rel="noopener noreferrer"
                    className='linkk'>GitHub</a>
            </div>

           <article>
            <div className="minhafoto"><img src="/assets/minhafoto.jpeg" alt="" /></div>
           </article>
           {/*Sobre mim
           Atualmente curso Análise e Desenvolvimento de Sistemas pela Uniasselvi e tenho grande interesse na área de desenvolvimento web. Meu objetivo é construir uma carreira sólida como desenvolvedor, contribuindo com soluções criativas e eficientes para o mundo digital. Sou apaixonado por tecnologia e inovação, sempre em busca de aprendizado contínuo e oportunidades para aplicar minhas habilidades na prática.
           
           Atuação
            <div className="profile">
                <img src="/src/assets/minhafoto.jpeg" alt="" />
            </div>
                */}
            <div className="about">
  <div className="about-content">
    <div className="touba">
         <h2 className='h2'>Sobre mim</h2>
      <p className='paragraph'>
        Atualmente curso Análise e Desenvolvimento 
        de Sistemas pela Uniasselvi e tenho grande 
        interesse na área de desenvolvimento web. 
        Meu objetivo é construir uma carreira sólida 
        como desenvolvedor, contribuindo com soluções
        criativas e eficientes para o mundo digital.
        Sou apaixonado por tecnologia e inovação, 
        sempre em busca de aprendizado contínuo e 
        oportunidades para aplicar minhas habilidades 
        na prática.
      </p>
    </div>

    <div className="touba">
      <h2>Atuação</h2>
      <p className="paragraph">
        Atualmente sou um desenvolvedor front-end com forte foco 
        em interações visuais e experiência do usuário. 
        Gosto de inovar em cada projeto, buscando sempre trazer 
        dinamismo aos sites por meio de animações, efeitos com CSS, 
        JavaScript ou qualquer outra tecnologia que contribua para 
        uma interface mais envolvente.
        Tenho cerca de 80% da minha experiência voltada 
        para o front-end, mas também possuo conhecimentos 
        sólidos em back-end, especialmente utilizando Python 
        com o framework Django. Essa combinação me permite 
        desenvolver aplicações completas, com interfaces 
        modernas e bem integradas ao sistema.  
      </p>
    </div>
  </div>
</div>


            <Habilidade />
            <Projetos />
            <Footer />
            
       </section>
    )
}

export default Conteudo