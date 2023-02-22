const Users = require("../Models/Users");
const accessoriesSchema = require("../Models/Accessories");
const { validateCreate } = require("../Validators/Accessories.js");

/**
 * This function is used to create a new accessory
 * @param req - The request object.
 * @param res - The response object.
 * @returns the status of the request and a message.
 */
const routerPostAccessories = async (req, res) => {
  validateCreate;
  const accessories = accessoriesSchema(req.body);

  const user = await Users.findOne(accessories.eMail);

  if (user && user.loading === "valid") {
    if (user.roll === "admin" || user.roll === "superAdmin") {
      accessories
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
    } else {
      return res.status(201).json("you do not have access to this information");
    }
  } else {
    return res.status(201).json(`${eMail} Not found`);
  }
};

/**
 * This function is used to get all the accessories from the database
 * @param req - The request object represents the HTTP request and has properties for the request query
 * string, parameters, body, HTTP headers, and so on.
 * @param res - The response object.
 */
const routerGetAccessories = async (req, res) => {
  const { name } = req.query;
  const accessories = await accessoriesSchema
    .find()
    .populate("reviewAccesories", { description: 1, rate: 1, user: 1 })
    .populate("billing", {
      invoice_number: 1,
      full_value: 1,
      discount: 1,
      car: 1,
      user: 1,
      accessories: 1,
    });

  try {
    if (name) {
      let accessorieName = accessories.filter((accessorie) =>
        accessorie.name.toLowerCase().includes(name.toLowerCase())
      );
      accessorieName.length
        ? res.status(200).json(accessorieName)
        : res.status(201).json("Not found");
    } else {
      res.status(200).json(accessories);
    }
  } catch (error) {
    res.send(`Error ${error}`);
  }
};

/**
 * It finds the accessory by its id and populates the review field with the description and rate fields
 * @param req - The request object represents the HTTP request and has properties for the request query
 * string, parameters, body, HTTP headers, and so on.
 * @param res - The response object.
 */
const routerGetByidAccessories = (req, res) => {
  const { id } = req.params;
  accessoriesSchema

    .findById(id)
    .populate("review", { description: 1, rate: 1 })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};

/**
 * This function is used to update the accessories information in the database
 * @param req - The request object. This contains information about the HTTP request that raised the
 * event.
 * @param res - The response object.
 */
const routerPutAccessories = async (req, res) => {
  const { name, price, description, image, discount, id } = req.body;

  accessoriesSchema
    .updateOne(
      { _id: id },
      { $set: { name, price, description, image, discount } }
    )
    .populate("review", { description: 1, rate: 1 })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};

/**
 * This function is used to delete a specific accessory by its id
 * @param req - The request object represents the HTTP request and has properties for the request query
 * string, parameters, body, HTTP headers, and so on.
 * @param res - The response object.
 */
const routerDeleteAccessories = async (req, res) => {
  const { id } = req.params;
  const { status, eMail } = req.body;
  const user = await Users.findOne(car.eMail);

  if (user) {
    if (user.roll === "superAdmin" && user.loading === "valid") {
      accessoriesSchema

        .updateOne({ _id: id }, { $set: { status } })
        .populate("review", { description: 1, rate: 1 })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
    } else {
      return res.status(201).json("you do not have access to this information");
    }
  } else {
    return res.status(201).json(`${eMail} Not found`);
  }
};

module.exports = {
  routerPostAccessories,
  routerGetAccessories,
  routerGetByidAccessories,
  routerPutAccessories,
  routerDeleteAccessories,
};
