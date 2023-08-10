import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    
       <div className='header__socials'>
           <a href="https://www.linkedin.com/in/dhaval-patel-0906341a6/" ><BsLinkedin/></a>
           <a href="https://github.com/dhavalpatel111"> <FaGithub/></a>
           <a href="https://www.instagram.com/i_m_dhaval_1.11/" > <FaInstagram/></a>
       </div>    
     
  )
}

export default HeaderSocials
