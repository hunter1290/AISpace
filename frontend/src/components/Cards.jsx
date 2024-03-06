import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'

const Main = styled.div`

background-color: black;
color: white;
padding-top:4%;
border-radius: 15px;
height: 50vh;
width: 20vw;
 display: flex;
 flex-direction: column;
 gap: 20px;
 justify-content: center;
 align-items: center;
 img{
   height: 65%;
    width: 75%;
   border-radius: 5px;
 }
 h2{
  font-size: 18px;
  font-weight: 800;
 }
 button{
  border: none;
  background-color: #4690da;
  width: 25%;
  font-size: 14px;
  font-weight: 800;
  border-radius: 12px;
 }

 @media (max-width: 768px) {
    width: 45vw;
  }
`;

function Cards({key,name,desc,img}) {
  const navigate = useNavigate();
  const goTo = ()=>{
    navigate(`/${name}`)
  }
  return (
    <Main>
      <img src={img} alt="" />
       <h2>{name}</h2>
       {name==='ChatGPT'?<button onClick={goTo}>Try it</button>:<>Coming soon</>}
    </Main>
  )
}

export default Cards
