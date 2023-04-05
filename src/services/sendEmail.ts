import emailjs from '@emailjs/browser';

const EMAIL_JS_SERVICE_ID = process.env.EMAIL_JS_SERVICE_ID as string;
const TEMPLATE_ID = process.env.TEMPLATE_ID as string;
const PUBLIC_KEY = process.env.PUBLIC_KEY as string;

const sendEmail = (emailData: any) =>
  new Promise((resolve, reject) => {
    console.log(PUBLIC_KEY);

    emailjs
      .send(EMAIL_JS_SERVICE_ID, TEMPLATE_ID, emailData, PUBLIC_KEY)
      .then(() => {
        resolve(true);
      })
      .catch((error) => {
        reject(error);
      });
  });

export default sendEmail;
