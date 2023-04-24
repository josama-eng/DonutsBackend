const nodemailer = require("nodemailer");
const MAIL_USER = process.env.MAIL_USER;
const MAIL_PASS = process.env.MAIL_PASS;
const path = require("path");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: MAIL_USER,
    pass: MAIL_PASS,
  },
});

//for contact us
const sendMail = function (from, subject, html) {
  let mailOptions = {
    from: from,
    to: `"Donuts" ${MAIL_USER}`,
    subject: subject,
    html: html,
  };
  return transporter.sendMail(mailOptions);
};

//for activation
const activateMail = function (to, subject, html) {
  let mailOptions = {
    from: `Donuts ${MAIL_USER}`,
    to: to,
    subject: subject,
    html: html,
    attachments: {
      filename: "logo.png",
      path: path.resolve(__dirname, "../public/images/logo.png"),
      cid: "logo@nodemailer.com",
    },
  };
  return transporter.sendMail(mailOptions);
};

module.exports = {
  sendMail,
  activateMail,
};
