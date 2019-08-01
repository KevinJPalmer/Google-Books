const router = require("express").Router();
const booksController = require("../../controllers/booksController");


router
  .route("/")
  .get(booksController.findAll);

router
  .route("/")
  .post(booksController.create);


router
  .route("/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

// router.route("/")
//   .post(booksController.create);

  module.exports = router;
