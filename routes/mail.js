require("dotenv").config();
const cors = require("cors");
const express = require("express");
const router = express.Router();
const sendMail = require("../services/mail.service");
const { htmlContactForm } = require("../template/mail.template");

const server = express();
server.use(cors());
server.use(express.json());

//contact us
router.post("/api/mail/sendContact", async (req, res) => {
  const { email, subject, textarea } = req.body;
  let mailHtml = htmlContactForm(textarea, email);

  sendMail(email, subject, mailHtml)
    .then((result) => {
      res.status(220).send("ok");
    })
    .catch((err) => {
      console.log(err);
      res.status(412).send(err);
    });
});

module.exports = router;
