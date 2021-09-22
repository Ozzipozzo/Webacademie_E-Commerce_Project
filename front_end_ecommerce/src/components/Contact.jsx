import Typed from 'react-typed';
import React from "react";
import emailjs from 'emailjs-com';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { useForm } from 'react-hook-form';
import { makeStyles } from '@material-ui/core/styles';
import { Input, Button } from '@material-ui/core';
import { ErrorMessage } from '@hookform/error-message';

function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm('service_rgt8jk7', 'template_6gkyjak', e.target, 'user_Efa0OiHeDslSsfszBMrRd')
    window.alert('Votre email a été envoyé !');
    window.location.href = "http://localhost:3000/Contact";
    e.target.reset();
}

export default function Contact() {
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
    const { register, formState: { errors } } = useForm();
    const classes = useStyles();

    return (

        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    <Typed
                        className="typed-text"
                        strings={["Formulaire de contact"]}
                        typeSpeed={40}
                        backSpeed={60}
                        loop
                    />
                </Typography><br/>
                <form onSubmit={sendEmail} noValidate style={{ width: '100%' }}>

                    <Input
                        fullWidth={true}
                        autoFocus={true}
                        {...register('password', { required: "Veuillez indiquez votre e-mail" })}
                        type="email"
                        id="email"
                        name="email"
                        placeholder="E-mail"
                    />
                    <ErrorMessage
                        errors={errors}
                        name='email'
                        render={({ message }) => <p>{message}</p>}
                    /><br /><br />

                    <Input
                        fullWidth={true}
                        autoFocus={true}
                        {...register('name', { required: "Veuillez indiquez votre nom" })}
                        type="text"
                        id="name"
                        placeholder="Nom"
                    /><ErrorMessage
                        errors={errors}
                        name='name'
                        render={({ message }) => <p>{message}</p>}
                    /><br /><br />

                    <Input
                        fullWidth={true}
                        autoFocus={true}
                        {...register('message', { required: "Veuillez indiquez votre message" })}
                        type="text"
                        id="message"
                        placeholder="Message"
                    /><ErrorMessage
                        errors={errors}
                        name='message'
                        render={({ message }) => <p>{message}</p>}
                    /><br /><br />

                    <Button
                        fullWidth={true}
                        type="submit">Envoyer</Button>

                </form>
            </div>
        </Container>

    )
}
