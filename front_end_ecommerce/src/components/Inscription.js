import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message'; 
import { Input, Button } from '@material-ui/core';
import { createBrowserHistory } from "history";


function Inscription() {
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
  const [success, setSuccess] = useState(null)
  const classes = useStyles();
  const { register, formState: { errors }, handleSubmit } = useForm();
  const onSubmit = (data) => fetch("http://localhost:8000/api/registration", { 
    method: 'POST', 
      headers: {
        "Content-Type": "application/json",
        },
      body: JSON.stringify({
        username: data.username,
        password: data.password,
        firstname: data.firstname,
        lastname: data.lastname,
        telephone: data.telephone
      })
    })  
    .then(res => {
      console.log(res)
      if(res.status !== 200){
        console.log('erreur')
      } else {
        setSuccess('Enregistrement réussi veuillez vous connecter')
        history.push("/connexion");
      }   
  })
    
      
  
  return (

    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <div className="success">
          {success}
        </div>
        <Typography component="h1" variant="h5">
          Inscription
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)} noValidate style={{width: '100%'}}>
          <Input
          autoFocus={true} 
          fullWidth={true} 
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
          fullWidth={true}  
          {...register('password', {required : "Veuillez indiquez votre password" })}
          type="password"
          id="password"
          placeholder="Mot de passe"
          /><ErrorMessage
          errors={errors}
          name='password'
          render={({message}) => <p>{message}</p>}
          /><br/><br/>

          <Input 
          fullWidth={true} 
          {...register('firstname', {required : "Veuillez indiquez votre prénom" })}
          type="text"
          id="firstname"
          placeholder="Prénom"
          /><ErrorMessage
          errors={errors}
          name='firstname'
          render={({message}) => <p>{message}</p>}
          /><br/><br/>

          <Input 
          fullWidth={true} 
          {...register('lastname', {required : "Veuillez indiquez votre nom de famille" })}
          type="text"
          id="lastname"
          placeholder="Nom de famille"
          /><ErrorMessage
          errors={errors}
          name='lastname'
          render={({message}) => <p>{message}</p>}
          /><br/><br/>

          <Input 
          fullWidth={true} 
          {...register('telephone', {required : "Veuillez indiquez votre telephone" })}
          type="text"
          id="telephone"
          placeholder="Telephone"
          /><ErrorMessage
          errors={errors}
          name='telephone'
          render={({message}) => <p>{message}</p>}
          /><br/><br/>

          <Button
          fullWidth={true} 
           type="submit">M'inscrire</Button>
          
        </form>
      </div>
      <Box mt={8}>
        <Inscription />
      </Box>
    </Container>

  );
}
