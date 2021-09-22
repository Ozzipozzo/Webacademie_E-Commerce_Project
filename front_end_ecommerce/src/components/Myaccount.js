import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Input } from '@material-ui/core';
import { ErrorMessage } from '@hookform/error-message';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { createBrowserHistory } from "history";


function Myaccount() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        MUNCHIES !
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

export default function Update() {

  var current_id = window.localStorage.getItem("userId");
  const history = createBrowserHistory({forceRefresh:true});
  const classes = useStyles();
  const [setSuccess] = useState(null)
  const { register, formState: { errors }, handleSubmit } = useForm();
  const [showPassword, setShowPassword] = useState(true);
  const SHOWPASSWORD = () => {
    showPassword ? setShowPassword(false) : setShowPassword(true)
  }
  const onSubmit = (data) => fetch(`http://localhost:8000/api/update/${current_id}`, {
    method:'POST',
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
    if(res.status !== 200){
      console.log('erreur')
    } else {
      setSuccess('Modification effectuée !')
      history.push("/myaccount");
    }
  })

  const onSubmit2 = (data) => fetch(`http://localhost:8000/api/update_adress/${current_id}`, {
    method:'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        adressline1: data.adress1,
        adressline2: data.adress2,
        city: data.firstname,
        zipcode: data.zipcode,
        country: data.country
      })
  })
  .then(res => {
    if(res.status !== 200){
      console.log('erreur')
    } else {
      setSuccess('Modification effectuée !')
      history.pushState("/myaccount");
    }
  })

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Mon profil
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)} noValidate style={{ width: '100%' }}>
          <Input
            autoFocus={true}
            fullWidth={true}
            {...register('username', { required: "Veuillez indiquez votre email" })}
            type="text"
            id="username"
            placeholder="E-mail"
          /><ErrorMessage
            errors={errors}
            name='username'
            render={({ message }) => <p>{message}</p>}
          /><br /><br />

          <Input
            style={{ width: '95%' }}
            {...register('password', { required: "Veuillez indiquez votre password" })}
            type={showPassword ? "password" : "text"}
            id="password"
            placeholder="Mot de passe"
          />
          <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} onClick={SHOWPASSWORD} />
          <ErrorMessage
            errors={errors}
            name='password'
            render={({ message }) => <p>{message}</p>}
          /><br /><br />

          <Input
            fullWidth={true}
            {...register('firstname', { required: "Veuillez indiquez votre prénom" })}
            type="text"
            id="firstname"
            placeholder="Prénom"
          /><ErrorMessage
            errors={errors}
            name='firstname'
            render={({ message }) => <p>{message}</p>}
          /><br /><br />

          <Input
            fullWidth={true}
            {...register('lastname', { required: "Veuillez indiquez votre nom de famille" })}
            type="text"
            id="lastname"
            placeholder="Nom de famille"
          /><ErrorMessage
            errors={errors}
            name='lastname'
            render={({ message }) => <p>{message}</p>}
          /><br /><br />

          <Input
            fullWidth={true}
            {...register('telephone', { required: "Veuillez indiquez votre telephone" })}
            type="text"
            id="telephone"
            placeholder="Telephone"
          /><ErrorMessage
            errors={errors}
            name='telephone'
            render={({ message }) => <p>{message}</p>}
          /><br /><br />

          <Button
            fullWidth={true}
            type="submit">Mettre à jour</Button>

        </form>
      </div>

      {/* ADRESS FORM */}
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Mon adresse
        </Typography>

        <form onSubmit={handleSubmit(onSubmit2)} noValidate style={{ width: '100%' }}>
          <Input
            autoFocus={true}
            fullWidth={true}
            {...register('adress1')}
            type="text"
            id="adress1"
            placeholder="Adresse"
          /><ErrorMessage
            errors={errors}
            name='adress1'
            render={({ message }) => <p>{message}</p>}
          /><br /><br />

          <Input
            autoFocus={true}
            fullWidth={true}
            {...register('adress2', { required: "Veuillez indiquez votre adresse" })}
            type="text"
            id="adress2"
            placeholder="Complément d'adresse"
          /><ErrorMessage
            errors={errors}
            name='adress2'
            render={({ message }) => <p>{message}</p>}
          /><br /><br />

          <Input
            fullWidth={true}
            {...register('city', { required: "Veuillez indiquez votre ville" })}
            type="text"
            id="city"
            placeholder="Ville"
          /><ErrorMessage
            errors={errors}
            name='city'
            render={({ message }) => <p>{message}</p>}
          /><br /><br />

          <Input
            fullWidth={true}
            {...register('zipcode', { required: "Veuillez indiquez votre code postal" })}
            type="int"
            id="zipcode"
            placeholder="Code postal"
          /><ErrorMessage
            errors={errors}
            name='zipcode'
            render={({ message }) => <p>{message}</p>}
          /><br /><br />

          <Input
            fullWidth={true}
            {...register('country', { required: "Veuillez indiquez votre pays" })}
            type="text"
            id="country"
            placeholder="Pays"
          /><ErrorMessage
            errors={errors}
            name='country'
            render={({ message }) => <p>{message}</p>}
          /><br /><br />

          <Button
            fullWidth={true}
            type="submit">Mettre à jour</Button>

        </form>
      </div>


      <Box mt={8}>
        <Myaccount />
      </Box>

    </Container>
  );
}