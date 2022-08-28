const userSchema = require(`../models/userSchema`);
const crypto = require('crypto');
module.exports = {
  createUser: async (req, res) => {

    let errors = [];

    if (req.body.user.length < 1) {
      errors.push("Empty username");
    }
    if (req.body.passOne.length < 8) {
      errors.push("Password should be at least 8 symbols");
    }
    if (req.body.gender.length < 1) {
      errors.push("Empty gender");
    }
    if (req.body.yearsOld.length < 1) {
      errors.push("Empty age");
    }
    if (req.body.city.length < 1) {
      errors.push("Empty city");
    }

    if (req.body.passOne.length !== req.body.passTwo.length) {
      errors.push("Passwords mismatch");
    }

    if (errors.length > 0) {
      res.send({ errors: errors});
      return;
    }

    const shasum = crypto.createHash('sha1');
    shasum.update(req.body.passOne);

    const user = new userSchema();
    user.user = req.body.user;
    user.password = shasum.digest('hex');
    user.gender = req.body.gender;
    user.city = req.body.city;
    user.yearsOld = req.body.yearsOld;
    await user.save();

    res.send({ message: "all good"});
  },
};
