const express = require("express");
const router = express.Router;
const postCtrl = require("../controllers/post");

//GET ROUTES

//All posts
router.get("/", postCtrl.index);

//POST ROUTES

//Only user can create post
router.post("/feed", postCtrl.create);

//PUT ROUTES

//edit post
router.put("/", postCtrl.edit);

//Delete Routes

//Only user can delete post
router.delete("/:id", postCtrl.delete);
module.exports = router;
