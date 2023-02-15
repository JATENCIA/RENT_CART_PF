const express = require("express");
const router = express.Router();
const bcryptjs = require("bcryptjs");
const Users = require("../Models/Users");
const userSchema = require("../Models/Users");
const { validateCreate } = require("../Validators/Users.js");

// Create user

// router.post("/", (req, res) => {
//   validateCreate
//   const user = userSchema(req.body);
//   user
//     .save()
//     .then((data) => res.json(data))
//     .catch((error) => res.json({ message: error }));
// });

router.post("/", async (req, res) => {
  try {
    validateCreate;
    const user = userSchema(req.body);
    let passwordHash = await bcryptjs.hash(user.password, 8);
    const newUser = await new Users({
      name: user.name,
      lastName: user.lastName,
      kindOfPerson: user.kindOfPerson,
      eMail: user.eMail,
      location: user.location,
      telephone: user.telephone,
      dni: user.dni,
      password: passwordHash,
    });

    const saveUser = await newUser.save();
    res.status(200).json(saveUser);
  } catch (error) {
    res.status(500).send(`{messaje: ${error}}`);
  }
});
/* This is a login route, it is looking for the user in the database and comparing the password with
the one that is in the database. */

router.post("/loading", async (req, res) => {
  try {
    const { eMail, password, loading } = req.body;
    const users = await Users.findOne({ eMail });
    let equal;

    users
      ? (equal = bcryptjs.compareSync(password, users.password))
      : res.status(201).json(`${eMail} Not found`);

    if (equal) {
      await userSchema.updateOne({ _id: users._id }, { $set: { loading } });
      return res.status(200).json(loading);
    } else {
      return res
        .status(201)
        .json({ loading: `${users.loading}`, password: "Incorrect password" });
    }
  } catch (error) {
    res.status(500).send(`{messaje: ${error}}`);
  }
});

router.post("/signoff", async (req, res) => {
  try {
    const { _id, loading } = req.body;
    const users = await Users.findOne({ _id });

    if (users.loading === "valid") {
      let Signoff = await userSchema.updateOne(
        { _id: _id },
        { $set: { loading } }
      );
      return res.status(200).json(Signoff);
    } else {
      return res
        .status(201)
        .json("The transfer cannot be closed. You are not connected.");
    }
  } catch (error) {
    res.status(500).send(`{messaje: ${error}}`);
  }
});

router.get("/", async (req, res) => {
  try {
    const { dni } = req.query;
    const { eMail, password } = req.body;
    const user = await Users.findOne({ eMail });

    let equal;
    if (user) {
      if (user.roll === "admin" || user.roll === "superAdmin") {
        equal = bcryptjs.compareSync(password, user.password);
      } else {
        return res
          .status(201)
          .json("you do not have access to this information");
      }
    } else {
      return res.status(201).json(`${eMail} Not found`);
    }
    if (equal) {
      const users = await userSchema
        .find()
        .populate("review", { description: 1, rate: 1, car: 1 })
        .populate("reviewAccesories", {
          description: 1,
          rate: 1,
          accessories: 1,
        })
        .populate("billing", {
          invoice_number: 1,
          full_value: 1,
          discount: 1,
          car: 1,
          accessories: 1,
        });
      if (dni) {
        let userDni = users.filter((user) => user.dni === Number(dni));
        userDni.length
          ? res.status(200).json(userDni)
          : res.status(201).json("Not found");
      } else {
        res.status(200).json(users);
      }
    } else {
      return res.status(201).json("Incorrect password");
    }
  } catch (error) {
    res.status(500).json(`Error ${error}`);
  }
});

// get a user
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    let user = await userSchema
      .findById(id)
      .populate("review", { description: 1, rate: 1, car: 1 })
      .populate("reviewAccesories", {
        description: 1,
        rate: 1,
        accessories: 1,
      })
      .populate("billing", {
        invoice_number: 1,
        full_value: 1,
        discount: 1,
        car: 1,
        accessories: 1,
      });

    if (loading === "valid") {
      return res.status(200).json(user);
    } else {
      return res.status.json("Login to see this information");
    }
  } catch (error) {
    res.status(500).json(`Error ${error}`);
  }
});

// update a user
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, lastName, kindOfPerson, eMail, location, telephone, image } =
    req.body;

  let user = await Users.findById(id);

  if (user.loading === "valid") {
    userSchema
      .updateOne(
        { _id: id },
        {
          $set: {
            name,
            lastName,
            kindOfPerson,
            eMail,
            location,
            telephone,
            image,
          },
        }
      )
      .populate("review", { description: 1, rate: 1 })
      .then((data) => res.json(data))
      .catch((error) => res.status(500).json({ message: `${error} ` }));
  } else {
    return res.status.json("Login to see this information");
  }
});

// update a user
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const { active } = req.body;

  let user = await Users.findById(id);
  if (user.loading === "valid" && user.roll === "superAdmin") {
    userSchema
      .updateOne({ _id: id }, { $set: { active } })
      .populate("review", { description: 1, rate: 1 })
      .then((data) => res.json(data))
      .catch((error) => res.status(500).json({ message: `${error} ` }));
  } else {
    res.status(201).json("you do not have access to this information");
  }
});
/* This is a route that allows you to change the roll of a user. */

router.post("/roll/:id", async (req, res) => {
  const { id } = req.params;
  const { roll } = req.body;

  let user = await Users.findById(id);

  if (user.loading === "valid" && user.roll === "superAdmin") {
    userSchema
      .updateOne(
        { _id: id },
        {
          $set: {
            roll,
          },
        }
      )
      .then((data) => res.json(data))
      .catch((error) => res.status(500).json({ message: `${error} ` }));
  } else {
    return res.status.json("you do not have access to this information");
  }
});

module.exports = router;
