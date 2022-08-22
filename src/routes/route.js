const express = require('express');
const router = express.Router();



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.get("/sol1", function (req, res) {


    let arr = [1, 2, 3, 5, 6, 7]

    let total = 0;
    for (var i in arr) {
        total += arr[i];
    }

    let lastDigit = arr.pop()
    let consecutiveSum = lastDigit * (lastDigit + 1) / 2
    let missingNumber = consecutiveSum - total

    res.send({ data: missingNumber });
});

module.exports = router;