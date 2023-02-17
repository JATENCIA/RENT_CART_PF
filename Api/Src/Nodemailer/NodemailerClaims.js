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



const eMail02= async (email) => {
    
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
<body>
<div style="width: 100%; background-color: #090688;">
  <div style="padding: 20px 10px 20px 10px;">
    <div style=" padding: 10px 0px 10px 0px; width: 100%; text-align: center;">
    <img src="Logo RC 1.jpg" alt="" style="width: 250px; height: 80px;">
    </div>
  </div>
  <div style="background-color: #ffffff; margin-top: 0px; padding: 20px 10px 20px 10px; text-align: center;">
    <h3> Atencion al Cliente </h3>    
    <div style="display: flex; padding: 20px 10px 20px 10px; ">
      <div style=" padding: 10px 0px 10px 0px; width: 100%; text-align: center;">
        <h5 > Estimado cliente recibimos su reclamo, lo estamos precesando. A la brevedad un miembro de nuestro equipo se pondra en contacto.</h5>
        <p>GRACIAS POR SER PARTE, DISCULPE LOS INCONVENIENTES OCACIONADOS.</p> 
      </div>
    </div>
    <P style="margin-bottom: 10px;"><i>Atentamente:</i><br> Grupo RentCar</P>
    <a style="background-color: rgb(170, 170, 170); border: 2px solid gray; color: black; padding: 16px 32px; text-align: center; text-decoration: none; font-weight: bold; display: inline-block; font-size: 16px; margin: 4px 2px;
    transition-duration: 0.4s; cursor: pointer;" href="https://client-ochre-five.vercel.app">RentCar</a>
    <div style="background-color: rgb(36, 36, 36); color: #e3e3e3; padding: 5px 0px 0px 0px; width: 100%; text-align: center;">
      <a href="" ><img "cid:Logo Wp.png" style="width: 30px; height: 30px;"/></a>
      <p style="font-size: 20px; padding: 0px 20px 0px 20px;">Atencion al Cliente</p>
      <p>Contactate con nosotros por los siguientes canales digitales:<br>  
        E-Mail: <a style="color: #e3e3e3;"> info.grupo.rentcar@gmail.com </a><br>
        WhatsApp: <a style="color: #e3e3e3;"> +549 11 4586709 </a>
        FaceBook: <a> https://www.facebook.com/profile.php?id=100090221383335 </a>
        Instagram: <a> </a>
      </p>
      <p style="background-color: black; padding: 10px 0px 10px 0px ; font-size: 12 !important;">
      @ 2023 RentCar, todos los derechos reservados.</p>
    </div>
  </div>
<div></div>
</div>
</body>
</html>
    `;
        let mensaje = {
            from: '"RentCar" <info.grupo.rentcar@gmail.com>', // sender address
            to: email, // list of receivers
            subject: " Notificación", // Subject line
            text: "Atencion al Cliente", // plain text body
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
  module.exports = {eMail02}