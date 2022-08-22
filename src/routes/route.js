const express = require('express');
const router = express.Router();



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.get("/sol2", function (req, res) {
    let arr = [33, 34, 35, 37, 38]
    let len = arr.length

    let total = 0;
    for (var i in arr) {
        total += arr[i];
    }

    let firstDigit = arr[0]
    let lastDigit = arr.pop()
    let consecutiveSum = (len + 1) * (firstDigit + lastDigit) / 2
    let missingNumber = consecutiveSum - total

    res.send({ data: missingNumber });
});


module.exports = router;