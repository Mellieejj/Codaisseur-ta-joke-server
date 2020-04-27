const User = require("./model");
const bcrypt = require("bcryptjs");
const { Router } = require("express");

const router = Router();

router.post("/user", async (request, response, next) => {
  try {
    const user = {
      name: request.body.name,
      password: bcrypt.hashSync(request.body.password, 10),
    };
    const person = await User.create(user);
    response.send(person);

  } catch (error) {
    next(error);
  }
});

module.exports = router