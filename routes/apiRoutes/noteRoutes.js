const router = require("express").Router();

router.get("/note", (req, res) => {

    res.json(note);

});

router.post("/notes", (req, res)) => {
    req.body.id = uuidv4();
};

module.exports = router;