import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Trending from './Trending';
import Cards from './Cards';



const Container = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 margin-top: 4%;
`;

const AllM = styled.h1`
 margin-top: 5%;
 font-size: 44px;
 font-weight: 1000;
`;
const TrendHead = styled.h1`
 margin-top: 5%;
 font-size: 44px;
 font-weight: 1000;
 margin-bottom: 2%;
 flex-wrap: wrap;
`;
const Main = styled.div`
margin-top: 3%;
 padding-top: 3%;
 padding:2%;
 display: flex;
 justify-content: center;
 align-items: center;
 gap:15px;
 flex-wrap: wrap;
 @media (max-width: 768px) {
     display: flex;
      align-items: center;
      text-align: center;
    flex-direction: column;
  }
`;

const Trend = styled.div`

 display: flex;
 justify-content: center;
 align-items: center;
 gap: 15px;
 @media (max-width: 768px) {
     display: flex;
      align-items: center;
      text-align: center;
    flex-direction: column;
  }
`;

function Model() {
  
     const [models,setModels] = useState();
     const [loading,setLoading] = useState(false);
     const getModel = async()=>{
        const data = await fetch("https://2ej9qrfy.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type%3D%3D%22post%22%5D%7B%0A++%22image%22%3Aimg.asset-%3Eurl%2C%0A++++name%2C%0A++++desc%2C%0A++++upvote%2C%0A++++feedback%2C%0A++++trend%2C%0A++++myCodeFeild%0A%7D");
        const res = await data.json();
        const req = await res.result;
         setModels(req);
    }
    
    useEffect(()=>{
        
        if(!models)
        {
            setLoading(true);
            getModel();
        }
     },[models])

     if(loading===false&& models===null)
     {
         return(<h1>Loading.....</h1>)
     }
 
 
  return (
    models?<Container>
       <TrendHead>Trending</TrendHead>
       <Trend>
      { models.map((x,key)=>(
               x.trend?<Trending key={key} name={x.name} desc={x.desc} img ={x.image}/>:<></>
        ))}
       </Trend>
      <AllM>All Models</AllM>
    <Main>
       
     {
        models.map((x,key)=>(
               <Cards key={key} name={x.name} img ={x.image}/>
        ))
     }
    </Main>
    </Container>:<div>Currently No Data Present</div>
  )
}

export default Model
