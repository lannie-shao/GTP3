import React from 'react';
import { useState } from 'react';
import {RiCloseLine} from 'react-icons/ri';
import {ImFileText} from 'react-icons/im';
import './navbar.css';
import logo from '../../assets/logo.svg';

const Navbar = () => {
  const Menu=()=>{
    return(
      <>
      <p><a href='#home'>home</a></p>
      <p><a href='#wgpt3'>What is GPT?</a></p>
      <p><a href='#possibility'>open AI</a></p>
      <p><a href='#features'>case studies</a></p>
      <p><a href='#blog'>library</a></p>
      </>
    );
  };

  const [toggleMenu, setToggleMenu]=useState(false);

  return (
    <div className='gpt3__navbar'>
    <div className='gpt3__navbar-links'>
     <div className='gpt3__navbar-links__logo'>
    <img src={logo} alt='logo'/>
     </div>
     <div className='gpt3__navbar-links__container'>
       <Menu />
     </div>
    </div>

     <div className='gpt3__navbar-sign'>
      <p>sign in</p>
      <button type='button'>sign up</button>
     </div>

     <div className='gpt3__navbar-menu'>
      {toggleMenu ? <RiCloseLine color='white' size={27} onClick={()=>setToggleMenu(false)}/>
      :<ImFileText color='white' size={27} onClick={()=>setToggleMenu(true)} />}

     {toggleMenu && (
      <div className='gpt3__navbar-menu__container scale-up-center'>
      <div className='gpt3__navbar-menu__container-links'>
       <Menu />
      </div>

      <div className='gpt3__navbar-menu__container-links-sign'>
      <p>sign in</p>
      <button type='button'>sign up</button>
     </div>
     </div>
     )}

    {toggleMenu ? (mouse)=>{
      setToggleMenu(false)
    }:null}
    
     </div>
    </div>
  );
};

export default Navbar;