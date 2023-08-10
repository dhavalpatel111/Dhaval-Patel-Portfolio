import React from 'react'
import './footer.css'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiOutlineMail} from 'react-icons/ai'


const Footer = () => {
  return (
    <footer>

      <a href="#" className='footer__logo'>PORTFOLIO</a>
      
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      
      <div className="footer__socials">
        <a href="https://api.whatsapp.com/send?phone+9265952630"><AiOutlineWhatsApp/></a>
        <a href="https://www.instagram.com/i_m_dhaval_1.11/"><AiOutlineInstagram/></a>
        <a href="mailto:dhavalpatel9526@gmail.com"><AiOutlineMail/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; All rights are reserved.</small>
      </div>
    </footer>
  )
}

export default Footer