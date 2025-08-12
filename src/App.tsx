import { useState } from 'react'
import './App.css'
import { FaBars } from 'react-icons/fa'
import Conteudo from './components/Conteudo'


function App() {
  const [aberto, setAberto] = useState(false)

  const toggleMenu = () => {
    setAberto(!aberto)
  }

  return(
    <>
    <div className='info-completo'>
      <h1 className="title">
        Portfólio
      </h1>

      <div className='menu-container'>
        <button className='menu-toggle' onClick={toggleMenu}>
          <FaBars />
        </button>
      </div>

      <ul className={`list-menu ${aberto ? 'aberto' : ''}`}>
        <li><a href="#sobre" className='link-animado'>Sobre mim</a></li>
        <li><a href="#habilidade" className='link-animado'>Habilidades</a></li>
        <li><a href="#projetos" className='link-animado'>Projetos</a></li>
      </ul>
      <div className={`linha-branca ${aberto ? 'ativa' : ''}`}>
        </div>
    </div>

  
    <div className={`conteudo-container ${aberto ? 'menu-aberto' : ''}`}>
      <Conteudo />
    </div>
    
      </>
    
      
  
  )

  
 
}



export default App