import React,{useState} from 'react'
import styled from 'styled-components'
import Navbar from '../Navbar'
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: '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',
  dangerouslyAllowBrowser: true  // This is the default and can be omitted
});

const Main = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 background-color: #030212c0;
 color:white;
 `;
 const Container = styled.div`
 height: 100%;
 display: flex;
 flex-direction: column;
 align-items: center;
 `;
 const Info = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
   img{
    height: 30vh;
    width: 15vw;
    border-radius: 50%;
    margin-top: 3%;
   }
   p{
    margin-top: 3%;
    text-align: justify;
    height: 30vh;
    width: 70vw;
   }
 `;
const Work = styled.div`
 border: 2px solid;
`;
const Chat = styled.div`
  height: 80vh;
  width: 60vw;
  padding: 3%;
  text-align: justify;
  display: flex;
  flex-direction: column;
  align-items: center;

`;
const Send = styled.div`
display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2%;
input{
  color: white;
  background-color: black;
  width: 45vw;
  height: 3vh;
  padding: 3%;
}
`;

function ChatGPT() {
  
  const [chatInput,setChatInput] = useState('');
  const [chat,setChat] = useState(['Start your chat'])

  const chatCompletion = async()=>{
    const completion = await openai.chat.completions.create({
			messages: [{ role: "system", content: chatInput}],
			model: "gpt-3.5-turbo",
		  });
		  const newRes = completion.choices[0].message.content; 
     var data =  chat;
     data.push(newRes);
     setChat(data);
      console.log(chatInput);
      console.log(newRes);
  }

  const handleChatInput = (event) => {
    setChatInput(event.target.value)
  };

  return (
    <Main>
       <Navbar/> 
        changes are going on.....
       <Container>
         <Info>
                <img src="https://cdn.sanity.io/images/2ej9qrfy/production/73d095f3497e7e34069ccc5b2e2f75b210578742-1024x486.jpg" alt="img" />
                <p>Chatbots are one of the most exciting applications of LLMs, and ChatGPT is a great example of this. Powered by the GPT-4 language model, ChatGPT can engage in natural language conversations with users.</p>
         </Info>
         <Work>
           <Chat>
                {
                  chat.map((x,key)=>(
                    <>{x}<br/></>
                    
                  ))
                }
           </Chat>
           <Send>
             <input type="text" value={chatInput} placeholder='start your chat' onChange={handleChatInput}/>
             <button onClick={chatCompletion}>send</button>
           </Send>
         </Work>
       </Container>
    </Main>
  )
}

export default ChatGPT
