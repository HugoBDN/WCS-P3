// eslint-disable-next-line import/no-extraneous-dependencies
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const sendWelcomeEmail = async (email) => {
  try {
    await transporter.sendMail({
      from: "from@example.com",
      to: email,
      subject: "Bienvenue sur notre plateforme !",
      html: `<p> Vous êtes inscrit sur notre plateforme. La team 1 du P3 vous remercie !</p>`,
    });
    // eslint-disable-next-line no-restricted-syntax
    console.log(`E-mail envoyé avec succès à ${email} !`);
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'e-mail :", error);
    throw new Error("EMAIL_SENDING_FAILED");
  }
};
module.exports = { sendWelcomeEmail };
