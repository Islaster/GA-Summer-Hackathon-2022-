const express = require("express");
const router = express.Router;
const comCtrl = require("../controllers/comment");

//POST ROUTES

//All Comments
router.post("/:id/comments", comCtrl.create);

//PUT ROUTES

//edit comments
router.put("/:id/comments", comCtrl.edit);

//DELETE ROUTES

//delete Comment
router.delete("/:id/comments", comCtrl.delete);

module.exports = router;
