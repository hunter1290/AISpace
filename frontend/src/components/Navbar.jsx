import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Main = styled.nav`
width: 100%;
  background-color: #000;
  color: white;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img{
    height:6vh;
  }

`;

const MenuIcon = styled.div`
  cursor: pointer;
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;

const Menu = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 768px) {
    display: ${({ open }) => (open ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 8%;
    left: 0;
    width: 100%;
    background-color: #000;
    padding: 1rem;
    z-index: 1;
  }
`;

const MenuItem = styled.li`
  margin: 0 1rem;
   cursor: pointer;
    &:hover{
        font-size: 18px;
        font-weight: 700;
         text-decoration: underline;
    }
  @media (max-width: 768px) {
    margin: 0.5rem 0;
  }
`;

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };
  const navigate = useNavigate();

  const goTo = (path)=>{
     navigate(path)
  }

  return (
    <Main>
      <img src="https://cdn-icons-png.flaticon.com/512/1985/1985582.png" alt="logo" />
      <MenuIcon onClick={toggleMenu}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z" stroke='white'/>
        </svg>
      </MenuIcon>
      <Menu open={open}>
        <MenuItem onClick={()=>{goTo('/')}}>Home</MenuItem>
        <MenuItem onClick={()=>{goTo('/')}}>Trending</MenuItem>
        <MenuItem onClick={()=>{goTo('/')}}>All Models</MenuItem>
        {/* <MenuItem>FeedBack</MenuItem> */}
        <MenuItem onClick={()=>{goTo('/')}}>About</MenuItem>
      </Menu>
    </Main>
  );
};

export default Navbar;
