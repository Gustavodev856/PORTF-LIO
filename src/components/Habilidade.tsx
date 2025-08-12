import { useEffect, useRef } from 'react';
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
  SiFlask,
  SiPostman,
} from 'react-icons/si';
import './Habilidade.css';

function Habilidade() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.box');
            cards.forEach((card, i) => {
              setTimeout(() => {
                card.classList.add('ativo');
              }, i * 100);
            });
            observer.unobserve(entry.target); // só anima uma vez
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect(); // limpeza
  }, []);

  return (
    <>
    <section id='habilidade' className='conteudo-container'>
      <div className="Title-Habili">
        <h3>Habilidade</h3>
      </div>

      <div className="cards habilidade" ref={sectionRef}>
        <div className="box">
          <p>HTML5</p>
          <SiHtml5 size={48} color="#E44D26" />
        </div>
        <div className="box">
          <p>CSS3</p>
          <SiCss3 size={48} color="#1572B6" />
        </div>
        <div className="box">
          <p>JAVASCRIPT</p>
          <SiJavascript size={48} color="#F7DF1E" />
        </div>
        <div className="box">
          <p>TYPESCRIPT</p>
          <SiTypescript size={48} color="#3178C6" />
        </div>
        <div className="box">
          <p>PYTHON</p>
          <SiPython size={48} color="#3776AB" />
        </div>
        <div className="box">
          <p>DJANGO</p>
          <SiDjango size={48} color="#092E20" />
        </div>
        <div className="box">
          <p>BOOTSTRAP</p>
          <SiBootstrap size={48} color="#7952B3" />
        </div>
        <div className="box">
          <p>REACT.JS</p>
          <SiReact size={48} color="#61DAFB" />
        </div>
        <div className="box">
          <p>SQL</p>
          <SiMysql size={48} color="#00758F" />
        </div>
         <div className="box">
          <p>Flask</p>
          <SiFlask size={48} color="#00758F" />
        </div>
        <div className="box">
          <p>API RESTful</p>
          <SiPostman size={48} color="#FF6C37" />
        </div>
      </div>
      </section>
    </>
  );
}

export default Habilidade;
