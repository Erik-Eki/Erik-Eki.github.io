import React, { useEffect, useState } from "react";

import OpenAI from "../pages/api/openai"
import vercel from '@astrojs/vercel/serverless';

import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { maxHeight, maxWidth, width } from "@mui/system";


const MessageCard = (messageData) => {
  //const [text, setText] = useState("");
  //const [isUser, setIsUser] = useState(false);

  //return <div className="message">{text}</div>;

  return (
    <div className="message">{text}</div>
  )
};




function Conversations() {

  let convos = [
    { title: "convo 1", messages: [{ from: "Me", text: "test message for 1", id: "1-1" }] },
    { title: "convo 2", messages: [{ from: "Me", text: "test message for 2", id: "2-1" }] },
    { title: "convo 3", messages: [{ from: "Me", text: "test message for 3", id: "3-1" }, { from: "Jesus", text: "test response for 3", id: "3-2" }] },
  ];
  const [conversations, setConversations] = useState(convos);
  const [currentConversation, setCurrentConversation] = useState(convos[2]);
  const [currentConversationMessages, setCurrentConversationMessages] = useState(convos[2].messages);
  const [newPrompt, setNewPrompt] = useState("");

  useEffect(() => {
    let temp = currentConversation
    temp.messages = currentConversationMessages
    setCurrentConversation(temp)
  }, [currentConversationMessages])


  const Curr = () => {
    return (
      //currentConversation.messages.map((message) => (
      currentConversationMessages.map((message) => (
        <div 
          key={`${message.from}_${message.id}`}
          className=" flex flex-row p-3"
        >
          <div 
            style={{width: "20%"}}
          >
            <div>
              {message.from}:
            </div>
          </div>

          <div
            key={message.id}
            className="text-xl font-medium text-black" 
            style={{ display: "flex", flexGrow: 2 }}>
            {message.text}
          </div>
        </div>
      ))
    )
  }


  function handleSubmit() {
    console.log("Submit clicked")
    
    let promptID = `${currentConversation.title.slice(-1)}-${(currentConversationMessages.length) + 1}`
    let requestID = `${currentConversation.title.slice(-1)}-${(currentConversationMessages.length) + 2}`

    let newUserMessage = {from: "Me", text: newPrompt, id: promptID }

    let temp = [...currentConversationMessages]
    temp[temp.length] = newUserMessage
    setCurrentConversationMessages(temp)

    const response = sendDataToOpenAI(newPrompt, requestID);

    temp[temp.length] = response
    setCurrentConversationMessages(temp)

    // TODO: Create new message object
    // TODO: Add message object to current conversation
    // TODO: Clear prompt
  }

  async function sendDataToOpenAI(prompt, id) {
  
    let dataToSend = {
      model: "text-davinci-003",
      prompt: prompt,
      max_tokens: 100,
      temperature: 0,
      // "top_p": 1,
      // "n": 1,
      // "stream": false,
      // "logprobs": null,
      //"stop": "\n"
    };

    let response = OpenAI(dataToSend)

    return {from: "Jesus", text: response, id: id }
    // TODO: Send prompt to OpenAI API
    // TODO: Return response from OpenAI API
  }




  return (
    <div
      //className=""
      style={{minWidth: 1000}}
    >
      <h2>Ebin messaging platform of epinnesses</h2>
      <div
        className="flex min-w-max w-full"
        style={{ display: "flex", flexDirection: "row", padding: 20 }}
      >
        <div 
            className="odd:bg-white even:bg-slate-300 p-5 max-w-xs w-48" 
            //style={{ padding: 20 }}
          >
          {conversations.map((conversation) => (
            <div
              key={conversation.title}
              className="conversation"
              onClick={(e) => {
                setCurrentConversation(conversation);
              }}
            >
              {conversation.title}
            </div>
          ))}
        </div>
        <div
          //className="main"
          //style={{ display: "flex", flexDirection: "column", padding: 20 }}
          className="flex flex-col p-6 rounded-xl shadow-lg space-x-4 min-w-fit w-2/3"
        >
          <div
            className="flex flex-col p-6"
            style={{
              overflowWrap: "anywhere",
              maxWidth: "100%",
              maxHeight: 400,
              overflow: "auto"
            }}
          >
          <h2 className=" text-xl pb-10">This is the start of your conversation!</h2>
          {currentConversation &&
            <Curr/>
          }

          </div>

          <div 
            className="flex flex-row space-x-4 pt-10"
            style={{ justifyContent: "flex-end" }}
          >

            <TextField
              className="rounded-xl pt-4 pb-4"
              style={{width: "100%"}}
              value={newPrompt}
              variant="filled"
              //label="Prompt"
              maxRows={4}
              placeholder="Ask Jesus for forgiveness..."
              onChange={(event) => setNewPrompt(event.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleSubmit()
                  e.preventDefault();
                }
              }}
            />
            <Button 
              //className=" bg-indigo-700 text-white rounded-l p-2 mx-auto max-w-sm items-center"
              className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
              onClick={handleSubmit}
            >
              Submit
            </Button>

          </div>
          <div
            className=" text-xs text-slate-600 p-2"
          >
            Press Enter or click the "Submit" button to submit
          </div>
        </div>
      </div>
    </div>
  );
}

export default Conversations;
