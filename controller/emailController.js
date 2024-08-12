
const Email = require('../models/emailModel');

const moveToTrash = async (req, res) => {
  try {
    const email = await Email.findOneAndUpdate(
      { _id: req.params.id, recipient: req.user.email },
      { trash: true },
      { new: true }
    );

    if (!email) {
      return res.status(404).send({ error: 'Email not found' });
    }

    res.send(email);
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = { moveToTrash };
