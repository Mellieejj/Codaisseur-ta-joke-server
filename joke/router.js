const Joke = require("./model");
const { Router } = require("express");
const auth = require("../auth/middleware");

const router = Router();

router.post("/jokes", auth, async (request, response, next) => {
  try {
    const { setup, punchline } = request.body;
    
    if (!setup || !punchline) {
      response.status(400).send({
        message: "Setup/Punchline can't be empty.",
      });
    } else {
      const joke = {
        setup: setup,
        punchline: punchline,
      };
      const createJoke = Joke.create(joke);
      response.send(createJoke);
    }
  } catch (error) {
    response.status(400).send({
      message: "Something went wrong",
    });
  }
});

router.get("/jokes", async (request, response, next) => {
  try {
    const jokes = Joke.findall();
    response.send(jokes);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
