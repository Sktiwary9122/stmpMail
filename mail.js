const nodemailer = require("nodemailer");
require('dotenv').config();
const transporter = nodemailer.createTransport({
    service: 'gmail',
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: "shudhanshu.dvlpr@gmail.com",
    pass: process.env.pass,
  },
});

//comment

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: 'ceo@cumail.com <shudhanshu.dvlpr@gmail.com>', // sender address
    to: "sktiwary9122@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<h1>YOu got 10 cgpa from our side.</h1>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  //
  // NOTE: You can go to https://forwardemail.net/my-account/emails to see your email delivery status and preview
  //       Or you can use the "preview-email" npm package to preview emails locally in browsers and iOS Simulator
  //       <https://github.com/forwardemail/preview-email>
  //
}

main().catch(console.error);