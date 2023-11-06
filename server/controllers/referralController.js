const db = require("../models");
const Referrals = db.Referrals;
const Users = db.Users;

module.exports = {
  getReferrals: async (req, res) => {
    const { id } = req.users;
    try {
      const result = await Referrals.findOne({
        where: {
          id,
        },
      });
      if (result) {
        res.status(200).send(result);
      } else {
        res.status(400).send({ message: err.message });
      }
    } catch (err) {
      console.log(err);
      res.status(400).send({ message: err.message });
    }
  },
};
