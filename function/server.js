require('dotenv').config();

const nodemailer = require('nodemailer');
const hbs = require('nodemailer-handlebars');
const log = console.log;

// Passo 1
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL || 'jhowgama21@gmail.com', // TODO: your gmail account 
        pass: process.env.PASSWORD || '' // TODO: your gmail password
    }
});

// Passo 2
transporter.use('compile', hbs({
    viewEngine: 'express-handlebars',
    viewPath: './views/'
}));


// Passo 3
let mailOptions = {
    from: 'jhowgama21@gmail.com', // TODO: remetente de email
    to: 'deltamavericks@gmail.com', // TODO: receptor de email
    subject: 'Nodemailer - Test',
    text: 'Wooohooo it works!!',
    template: 'index',
    context: {
        name: 'Accime Esterling'
    } // enviar valores extras para o modelo
};

// Step 4
transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
        return log('Ocorreu um erro',err );
    }
    return log('Email enviado !!!');
});