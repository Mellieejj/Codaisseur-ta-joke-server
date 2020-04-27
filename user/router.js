const User = require("./model");
const bcrypt = require("bcryptjs");
const { Router } = require("express");

const router = Router();

router.post("/user", async (request, response, next) => {
  try {
    const { password, name } = request.body;

    if (!name || !password) {
      return response
        .status(400)
        .send({ message: "Please supply a valid name and password" });
    } else if (password.length < 8) {
      return response
        .status(400)
        .send({ message: "Password should be at least 8 karakters" });
    } else {
      const user = {
        name: request.body.name,
        password: bcrypt.hashSync(request.body.password, 10),
      };
      const person = await User.create(user);
      response.send(person);
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
