const express = require("express")
const router = express.Router()

const collegeController = require("../Controller/collegeController")
const internController = require("../Controller/internController")





router.post("/functionup/colleges",collegeController.createCollege)
router.post("/functionup/interns",internController.createInterns)
router.get("/functionup/collegeDetails",collegeController.getAllInterns)


router.all("/**", function (req, res) {
    res.status(404).send({
        status: false,
        msg: "The api you request is not available"
    })
})

module.exports = router