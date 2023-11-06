const db = require("../models");
const City = db.City;

module.exports = {
  getAllCity: async (req, res) => {
    const result = await City.findAll();
    res.status(200).send(result);
    try {
    } catch (err) {
      console.log();
      res.status(400).send({ message: err.message });
    }
  },
  createCity: async (req, res) => {
    try {
      const { city } = req.body;
      const isCityExist = await City.findOne({
        where: {
          city,
        },
      });

      if (isCityExist) {
       return res.status(400).send("City already exist");
      }

      await City.create({
        city,
      });

      res.status(200).send({ message: "Create city success" });
    } catch (err) {
      console.log(err);
      res.status(400).send({ message: err.message });
    }
  },
};
