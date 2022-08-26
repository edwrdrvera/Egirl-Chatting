import { Paper } from '@mui/material';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import * as React from 'react';
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Typography from '@mui/material/Typography';

const Item = styled(Paper, {
  shouldForwardProp: (prop) => prop !== "pushRight"
})(({ theme, pushRight }) => ({
  backgroundColor: pushRight ? "#bdd6ff" : "#f5f5f5",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  marginLeft: pushRight ? "auto" : 0, // true flase thingy
  marginRight: pushRight ? 0 : "auto",
  marginBottom: "20px",
  height: "fit-content",
  color: theme.palette.text.secondary,
}));

function stringToColor(string) {
  let hash = 0;
  let i;

  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  return color;
}

function Message(props) {
  return (
    <Stack
    direction={props.pushRight ? "row-reverse" : "row"}
    sx={{p:1}}
    justifyContent="flex-start"
    spacing={2}
  >
    <Avatar sx = {{bgcolor : stringToColor(props.author)}}> {props.author[0]}</Avatar>
    <Stack direction="column">
    <Typography variant="body2" gutterBottom sx={{textAlign: props.pushRight ? "right" : "left"}}>
      {props.author}
    </Typography>
    <Item>
      {props.children}
    </Item>
    </Stack>
  </Stack>
  );
}


export default Message;
