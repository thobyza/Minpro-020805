const db = require("../models");
const Users = db.Users;
const Referrals = db.Referrals;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
  register: async (req, res) => {
    try {
      const {
        email,
        password,
        firstname,
        lastname,
        cellphone,
        city,
        referral,
      } = req.body;
      const isEmailExist = await Users.findOne({
        where: {
          email,
        },
      });

      if (isEmailExist) {
        return res.status(400).send({ message: "email has been used" });
      }

      const salt = await bcrypt.genSalt(10);
      const hashPassword = await bcrypt.hash(password, salt);

      if (referral !== "") {
        const isReferral = await Referrals.findOne({
          where: {
            referral_code: referral,
          },
        });
        if (!isReferral) {
          return res.status(400).send({ message: "Referral not found" });
        }
        const userPoints = await Users.findOne({
          where: {
            id: isReferral.UserId,
          },
        });

        let prevUserPoints = userPoints.points + 30;

        await Users.update(
          { points: prevUserPoints },
          {
            where: {
              id: isReferral.UserId,
            },
          }
        );
      }

      const newUser = await Users.create({
        email,
        password: hashPassword,
        firstname,
        lastname,
        cellphone,
        city,
        Referrals: referral,
      });

      if (referral !== "") {
        const newUserPoints = newUser.points + 30;
        await Users.update(
          {
            points: newUserPoints,
          },
          {
            where: {
              id: newUser.id,
            },
          }
        );
      }
      res.status(200).send({ message: "Register Success" });
    } catch (err) {
      console.log(err);
      res
        .status(400)
        .send({ message: err.message, message: "Register failed" });
    }
  },
  getAll: async (req, res) => {
    try {
      const result = await Users.findAndCountAll();
      res.status(200).send(result);
    } catch (err) {
      console.log(err);
      res.status(400).send({ message: err.message });
    }
  },
  getImg: async (req, res) => {
    const { id } = req.users;
    try {
      const result = await Users.findOne({
        where: {
          id,
        },
      });
      if (result) {
        const img = result.img;
        res.status(200).send(img);
      } else {
        res.status(400).send({ message: err.message });
      }
    } catch (err) {
      console.log(err);
      res.status(400).send({ message: err.message });
    }
  },

  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const isUserExist = await Users.findOne({
        where: {
          email,
        },
      });
      if (!isUserExist) {
        return res.status(400).send({ message: "user not found" });
      }

      const isValid = await bcrypt.compare(password, isUserExist.password);
      if (!isValid) {
        return res.status(400).send({ message: "incorrect password" });
      }

      const payload = { id: isUserExist.id };
      const token = jwt.sign(payload, "MP0208");

      res
        .status(200)
        .send({ message: "login success", result: isUserExist, token });
    } catch (err) {
      console.log(err);
      res.status(400).send({ message: err.message });
    }
  },
  keepLogin: async (req, res) => {
    try {
      const result = await Users.findOne({
        where: {
          id: req.users.id,
        },
      });
      res.status(200).send(result);
    } catch (err) {
      console.log(err);
      res.status(400).send({ err: err.message });
    }
  },
  editUsers: async (req, res) => {
    try {
      const { firstname, lastname, city, cellphone } = req.body;
      await Users.update(
        {
          firstname: firstname,
          lastname: lastname,
          city: city,
          cellphone: cellphone,
          img: req.file?.path,
        },
        {
          where: {
            id: req.users.id,
          },
        }
      );
      res.status(200).send("User Updated");
    } catch (err) {
      console.log(err);
      res.status(400).send({ err: err.message });
    }
  },
};
