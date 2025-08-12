import './Footer.css'
import { SiGithub, SiLinkedin } from 'react-icons/si'
import { MdEmail, MdPhone } from 'react-icons/md'

function Footer () {
    return(
        <footer className="footerStyle">
            <p>@ 2025 Gustavo Vasconcelos. Todos os direitos reservados</p>

            <div className='socialLinks'>
                <a href="https://github.com/Gustavodev856" target='_blank' rel='noopener noreferrer' className='linkStyle'>
                <SiGithub />
                GitHub</a>

           <a href="https://www.linkedin.com/in/gustavo-vasconcelos-2881b8272/" target="_blank" rel="noopener noreferrer" className="linkStyle">
          <SiLinkedin /> LinkedIn
        </a>
        <a href="https://wa.me/5581973363684" target="_blank" rel="noopener noreferrer" className="linkStyle">
  <MdPhone /> Contato
</a>

        <a href="mailto:gvasconcelos2021@gmail.com" className="linkStyle">
          <MdEmail /> E-mail
        </a>

                
            </div>
        </footer>
    )
}

export default Footer