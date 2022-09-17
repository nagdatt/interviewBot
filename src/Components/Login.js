import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';

import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Card } from "@mui/material";
function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://businessdemo-734cf.web.app/" target="_blank">
        NagdattBusiness
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const theme = createTheme();

export default function Login() {
    const provider = new GoogleAuthProvider();
    const handle=()=>{
        const auth = getAuth();
        signInWithPopup(auth, provider)
          .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
           
            // ...
          }).catch((error) => {
           
        
          });
    }
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Card
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
           
            height:"400px",
          }}
        >
          <h1>  InterviewBot</h1>
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <i class="bi bi-person"></i>
          </Avatar>
          <Typography component="h1" variant="h5">
          Login in with 
          </Typography>
          <Box  noValidate sx={{ mt: 1 }}>
         
          <Button
            
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handle}
          >
          <i class="bi bi-google" style={{marginRight:"5px"}}></i>  Google 
          </Button>
            <Grid container>
              
              <Grid item>
                <Link href="#" variant="body2" style={{textDecoration:"none"}}>
                <i class="bi bi-shield-check"></i>    {"Privacy policy"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Card>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  )
}
