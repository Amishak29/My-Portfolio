import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaAngellist } from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/amisha-arunjay-kumar-028550204/" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/Amishak29" target="_blank" rel="noreferrer" ><FaGithub /></a>
 
    </div>
  )
}

export default HeaderSocials