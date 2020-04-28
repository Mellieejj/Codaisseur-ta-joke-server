const Joke = require("./model");
const { Router } = require("express");

const router = Router();

router.post("/jokes", async (request, response, next) => {
  try {
    const { setup, punchline } = request.body;

    const joke = {
      setup: setup,
      punchline: punchline,
    };
    const createJoke = Joke.create(joke);
    response.send(createJoke);
  } catch (error) {
    next(error);
  }
});

router.get("/jokes", async(request, response, next) =>{
  try{
    const jokes = Joke.findall()
    response.send(jokes)
  } catch(error){
    next(error)
  }
})

module.exports = router