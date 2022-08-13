import { Paper } from '@mui/material';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import * as React from 'react';

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

function Message(props) {
  return (
      <Grid item style={{display: "flex", justifyContent: "flex-start", marginLeft: props.pushRight ? "calc(15%)" : 0, marginRight: !props.pushRight ? "calc(15%)" : 0}} xs="auto">
          <Item pushRight={props.pushRight}>
            <div>
              <strong>{props.author}</strong>
            </div>
            <div>
              {props.children}
            </div>
          </Item>
      </Grid>
  );
}

export default Message;
