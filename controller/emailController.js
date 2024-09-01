import Email from '../models/emailModel.js';

const sendEmail = async (req, res) => {
  const { recipient, subject, message } = req.body;

  const email = new Email({
    sender: req.user.email,
    recipient,
    subject,
    message,
  });

  try {
    await email.save();
    res.status(201).send(email);
  } catch (error) {
    res.status(400).send(error);
  }
};

const getEmails = async (req, res) => {
  try {
    const emails = await Email.find({ recipient: req.user.email });
    res.send(emails);
  } catch (error) {
    res.status(400).send(error);
  }
};

export { sendEmail, getEmails };
