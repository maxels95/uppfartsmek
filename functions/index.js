const {setGlobalOptions} = require("firebase-functions");
const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const cors = require("cors")({origin: true});

exports.sendContactEmail = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    const {name, email, message} = req.body;

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: functions.config().gmail.email,
        pass: functions.config().gmail.app_password,
      },
    });

    const mailOptions = {
      from: `"UppfartsMek form" <${functions.config().gmail.email}>`,
      to: "DITTMAIL@exempel.se",
      subject: `Kontakt från: ${name}`,
      text: `Namn: ${name}\nE-post: ${email}\nMeddelande:\n${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
        return res.status(500).send("Fel vid e-postskick.");
      }
      return res.status(200).send("Mail skickat – tack!");
    });
  });
});

setGlobalOptions({maxInstances: 10});
