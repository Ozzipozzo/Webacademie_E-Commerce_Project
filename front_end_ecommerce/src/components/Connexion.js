import React, { useState } from 'react';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message'; 
import { Input, Button } from '@material-ui/core';
import { createBrowserHistory } from "history";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        BeuhLand !
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({

  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {

  const history = createBrowserHistory({forceRefresh:true});
  const classes = useStyles();
  const { register, formState: { errors }, handleSubmit } = useForm();
  const [showPassword, setShowPassword] = useState(true);
  const SHOWPASSWORD = () => {
    showPassword ? setShowPassword(false) : setShowPassword(true)
  }
  const onSubmit = (data) => fetch("http://localhost:8000/api/login", { 
    method: 'POST', 
      headers: {
        "Content-Type": "application/json"
        },
      body: JSON.stringify({
        username: data.username,
        password: data.password
      })
    })  
    .then(res => res.json())
    .then(response => {
      window.localStorage.setItem("userId", response.id);
      window.localStorage.setItem("userEmail", response.username);
      window.localStorage.setItem("userFirstName", response.firstname);
      window.localStorage.setItem("userLastName", response.lastname);
      history.push("/");
    });

  return (

    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Connexion
        </Typography>
        
        <form onSubmit={handleSubmit(onSubmit)} noValidate style={{width: '100%'}}>
          <Input 
          fullWidth={true} 
          autoFocus={true} 
          {...register('username', {required : "Veuillez indiquez votre email" })}
          type="text"
          id="username"
          placeholder="E-mail"
          /><ErrorMessage
          errors={errors}
          name='username'
          render={({message}) => <p>{message}</p>}
          /><br/><br/>

          <Input 
          style={{width: '95%'}}
          {...register('password', {required : "Veuillez indiquez votre password" })}
          type={showPassword ? "password" : "text"}
          id="password"
          placeholder="Mot de passe"
          />
          <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash } onClick={SHOWPASSWORD}/> 
          
          <ErrorMessage
          errors={errors}
          name='password'
          render={({message}) => <p>{message}</p>}
          /><br/><br/>
          
          <Button 
          fullWidth={true} 
          type="submit">Se Connecter</Button>
        
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}