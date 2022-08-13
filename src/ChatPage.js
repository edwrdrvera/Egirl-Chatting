import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import NavBar from './NavBar';
import BottomBarChat from './BottomBarChat';
import { useState } from 'react';
import Message from './Message';

function ChatPage() {
  const[state, setState] = useState({chatInput: "edward", 
  messages: [
    {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidata",
        author: "Name here"
    },
    {
        text: "This is another message here",
        author: "psntnick"
    },
    {
        text: "This is another message here",
        author: "jamez"
    },
    {
        text: "Hello world this is a test",
        author: "psntnick"
    },
    {
      text: "pew",
      author: "psntnick"
  }
], 
currentUser : "psntnick"});

  function updateTextFieldState(event) {
    setState({...state, chatInput: event.target.value});
  }
  function renderMessages(){
    let messages = [];

    for(const[index, message] of state.messages.entries()){
      console.log(message)
      messages.push(<Message author = {message.author} key = {index} pushRight = {state.currentUser === message.author}>
        {message.text}
      </Message>)
    }
    return messages;
  }

  function sendMessage(event){
    event.preventDefault();
    let newMessages = state.messages;
    newMessages.push({text: state.chatInput,
    author: state.currentUser});
    setState({...state, messages: newMessages})
    event.target.reset();
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <NavBar />
      <Grid container spacing={2} justifyContent="center">
      <Grid item md={6} xs={6} m={6}>
        {renderMessages()}
        </Grid>
      </Grid>
      <BottomBarChat handleChange={updateTextFieldState} handleSend={sendMessage}/>

    </Box>
  );
}


export default ChatPage;//tells me what im expoeritngfgrwb
