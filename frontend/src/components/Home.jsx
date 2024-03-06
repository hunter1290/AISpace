import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar';
import Model from './Model';

const Main = styled.div`
padding-top: 2%;
height: 65vh;
background-color: black;
color: white;
border-bottom-right-radius: 25%;
border-bottom-left-radius: 25%;
display: flex;
justify-content: center;
align-items: center;
h1{
    font-size: 32px;
    font-weight: 900;
}
`;
const Container = styled.div``;

function Home() {
  return (
    <Container>
      <Navbar/>
    <Main>
        <h1>Welcome to AI Space</h1>
    </Main>
    <Model/>
    </Container>
  )
}

export default Home