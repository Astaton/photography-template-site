//express import
import express from "express";

//middleware imports
import expressStaticGzip from "express-static-gzip";
import bodyParser from "body-parser";
import nodemailer from 'nodemailer';

//React imports
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter, matchPath } from "react-router-dom";

//React-Redux imports
import { Provider } from 'react-redux';
import store from '../shared/store';

//React Component imports
import routes from "../shared/routes";
import App from '../shared/App';

//local imports
import client, { userEmail } from '../../oauth/clientData';

const port = process.env.PORT || 8080
const app = express();

app.use('/', expressStaticGzip("public/"));

app.use(bodyParser.urlencoded({extended: false}));

app.get('*', (req, res, next) => {
	let dest = req.url == '/index.html' ? '/' : req.url;
	const markup = renderToString(
		<Provider store={store} >
			<StaticRouter location={dest} context={{}}>
				<App /> 
			</StaticRouter>
		</Provider>
	)

	res.send(`
		<html lang="en-us">
			<head>
				<meta charset="utf-8">
				<meta name="viewport" content="width=device-width, initial-scale=1">
				<title>Bokeh Best Photography Inc.</title>
				<link rel="icon" type="image/png" href=${require('../../assets/logos/logo.png')}>
				<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous">
				<script src="/bundle.js" defer></script>
			</head>
			<body>
				<div id="app">${markup}</div>
			</body>
		</html>
	`)
})

app.post('/contact', (req, res) => {
	let transporter = nodemailer.createTransport({
		service: 'gmail',
		host: 'smtp.gmail.com',
		auth: {
			type: 'OAuth2',
			user: client.user,
			clientId: client.id,
			clientSecret: client.secret,
			refreshToken: client.refreshToken,
			accessToken: client.accessToken
		}
	});

	let mailOptions = {
		from: `${req.body.name} <${client.user}>`,
		to: 'astaton108@outlook.com',
		subject: 'Contact from Bokeh Best Photo website',
		html:  `<!DOCTYPE >
				<html lang="us-en">
					<head>
						<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
						<meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=no;">
						<title>Cool Email bro</title>
					</head>
					<body>
						<div>
							<h1>Email From ${req.body.name} at ${req.body.email}</h1>
							<p>messsage from ${req.body.name} reads: </p>
							<p>${req.body.message}</p>
							<p>${req.body.name}, ${req.body.number} ${req.body.email}</p>
						</div>
					</body>
				</html>`
	}

	transporter.sendMail(mailOptions, (err, info) => {
		if(err){
			console.log('Error', err);
			res.redirect('/contact/fail');
		} else{
			console.log('Email sent');
			res.redirect('/contact/success');
		}
	});

});

app.listen(port, () => console.log('server is running on port '+port));