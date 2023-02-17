const nodemailer= require('nodemailer');

require("dotenv").config()
const {
    USER, PASS
  } = process.env;

let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    //secure: true, // true for 465, false for other ports
    auth: {
      user: `${USER}`, // generated ethereal user
      pass: `${PASS}`, // generated ethereal password
    },
  });

  transporter.verify().then(() => {
    console.log('ready for send emails');
  })



const eMail1= async (eMail) => {
    
    let mensaHTM= `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        p, a, h1, h2, h3, h4, h5 {font-family: 'Roboto', sans-serif !important;}
        h1{font-size: 60px !important;}
        h2{font-size: 45px !important;}
        h3{font-size: 35px !important;}
        h4{font-size: 25px !important;}
        h5{font-size: 15px !important;}
        p, a{font-size: 15px !important;}
      </style>
    </head>
    <div style="width: 100%; background-color: #e3e3e3;">
      <div style="padding: 20px 10px 20px 10px;">
        <div style="background-color: rgb(4, 9, 82); padding: 10px 0px 10px 0px; width: 100%; text-align: center;">
        <img src="Logo RC 1.jpg" alt="" style="width: 200px; height: 80px; border: 2px solid rgb(8, 8, 8);">
        </div>
      </div>
      <div style="background-color: #e3e3e3; margin-top: 0px; padding: 20px 0px 5px 0px; text-align: center;">
        <h2>Bienvenido a RentCar</h2>
        <p>Somos una plataforma dedicada al alquiler de vehiculos. En donde te brindamos una gran variedad de opciones.</p>
        <p>GRACIAS POR SER PARTE DE NUESTRO GRUPO</p>
        <div style="display: flex; padding: 20px 10px 20px 10px; ">
          <div style=" padding: 10px 0px 10px 0px; width: 100%; text-align: center;">
            <img src="Logo RC 1.jpg" alt="" style="width: 300px;" />
            <p > Cualquie consulta <br>comunicate con nosotros <br>desde nuestra pagina <br> o por nuestros canales digitales. <br> TE ESPERAMOS </p>
          </div>
        </div>
        <P style="margin-bottom: 10px;"><i>Atentamente:</i><br> Grupo RentCar </P>
        <a style="background-color: rgb(5, 23, 124); border: 2px solid rgb(8, 8, 8); color: rgb(194, 191, 5); padding: 16px 32px; text-align: center; text-decoration: none; font-weight: bold; display: inline-block; font-size: 16px; margin: 4px 2px;
        transition-duration: 0.4s; cursor: pointer;" href="">RentCar</a>
        <div style="background-color: rgb(2, 27, 80); color: #9eaf08; padding: 5px 0px 0px 0px; width: 100%; text-align: center;">
          <a href="+549 11 4586709" ><img src="Logo Wp.png" style="width: 30px; height: 30px;"/></a>
          <p style="font-size: 20px; padding: 0px 20px 0px 20px;">Soporte</p>
          <p>Comunicate con nosotros por los siguientes canales:<br>
            <a href="info.grupo.rentcar@gmail.com" style="color: #bdba05;"><img src="email.png" style="width: 30px; height: 30px;"/></a>
            <a href="+549 11 4586709" style="color: #9faa09;"><img src="Logo Wp.png" style="width: 30px; height: 30px;"/></a>
            <a href="https://www.facebook.com/profile.php?id=100090221383335" style="color: #9faa09;"><img src="FB.png" style="width: 30px; height: 30px;"/></a>
            <a href=""style="color: #9faa09;"><img src="Instagram-Icon.png" style="width: 30px; height: 30px;"/></a>
          </p>
          <p style="background-color: black; padding: 10px 0px 10px 0px ; font-size: 12 !important;">
          @ 2023 RentCar, todos los derechos reservados.</p>
        </div>
      </div>
    <div></div>
    </div>
    <body>
      
    </body>
    </html>
    `;
        let mensaje = {
            from: '"RentCar" <info.grupo.rentcar@gmail.com>', // sender address
            to: eMail, // list of receivers
            subject: " Notificación", // Subject line
            text: "USUARIO CREADO CORRECTAMENTE ", // plain text body
            html: mensaHTM,
            attachments: [
                {
                    filename:'Logo RC 1.jpg',
                    path:'Logo RC 1.jpg',
                    cid:'Logo RC 1'
                },
                {
                    filename:'Logo Wp.png',
                    path:'Logo Wp.png',
                    cid:'Logo Wp'
                }
            ]
        };

        const info= await transporter.sendMail(mensaje)

        console.log(info);

}
  module.exports = {eMail1}