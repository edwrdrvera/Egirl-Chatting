import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import NavBar from './NavBar';
import BottomBarChat from './BottomBarChat';
import { useState } from 'react';

function ChatPage() {
  const[state, setState] = useState({chatInput: "edward"});
  const obj1 = {"text":"edward","textTwo":"two"};
  function updateTextFieldState(event) {
    setState({...state, chatInput: event.target.value});
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <NavBar />
      <Grid container spacing={2} justifyContent="center">
      <Grid item md={8} xs={12} m={5}>
        {state.chatInput}
        </Grid>
      </Grid>
      <BottomBarChat handleChange={updateTextFieldState}/>
    </Box>
  );
}


export default ChatPage;//tells me what im expoeritngfgrwb
