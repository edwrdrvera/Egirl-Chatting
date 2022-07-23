import SendIcon from '@mui/icons-material/Send';
import AppBar from '@mui/material/AppBar';
import Fab from '@mui/material/Fab';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

export default function BottomBarChat(props) {

  return (
    <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
      <form onSubmit={props.handleSend}>
      <Grid container justifyContent="center">
        <TextField
          hiddenLabel
          variant="filled"
          placeholder="Enter your message"
          fullWidth
          onChange={props.handleChange}
          InputProps={{
            style: {
              backgroundColor: "white"
            },
            endAdornment: <InputAdornment position="end">
              <IconButton type="submit">
                  <SendIcon />
                </IconButton>
            </InputAdornment>
          }}
        />
      </Grid>
      </form>
    </AppBar>
  );
}
