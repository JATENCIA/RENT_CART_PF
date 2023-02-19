const routerGetUsers = async (req, res) => {
    try {
      const { dni } = req.query;
      const { eMail, password } = req.body;
      const user = await Users.findOne({ eMail });
  
      // let equal;
      // if (user) {
      //   if (user.roll === "admin" || user.roll === "superAdmin") {
      //     equal = bcryptjs.compareSync(password, user.password);
      //   } else {
      //     return res
      //       .status(201)
      //       .json("you do not have access to this information");
      //   }
      // } else {
      //   return res.status(201).json(`${eMail} Not found`);
      // }
      // if (equal) {
      //   const users = await userSchema
      //     .find()
      //     .populate("review", { description: 1, rate: 1, car: 1 })
      //     .populate("reviewAccesories", {
      //       description: 1,
      //       rate: 1,
      //       accessories: 1,
      //     })
      //     .populate("billing", {
      //       invoice_number: 1,
      //       full_value: 1,
      //       discount: 1,
      //       car: 1,
      //       accessories: 1,
      //     });
      //   if (dni) {
      //     let userDni = users.filter((user) => user.dni === Number(dni));
      //     userDni.length
      //       ? res.status(200).json(userDni)
      //       : res.status(201).json("Not found");
      //   } else {
      //     res.status(200).json(users);
      //   }
      // } else {
      //   return res.status(201).json("Incorrect password");
      // }
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
    } catch (error) {
      res.status(500).json(`Error ${error}`);
    }
  };
  
  /**
   * It finds a user by id, populates the review, reviewAccesories and billing fields, and returns the
   * user if the user is valid
   * @param req - The request object represents the HTTP request and has properties for the request query
   * string, parameters, body, HTTP headers, and so on.
   * @param res - The response object.
   * @returns The user information is being returned.
   */