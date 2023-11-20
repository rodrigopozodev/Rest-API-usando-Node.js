const { Router } = require("express");
const router = Router();

router.get('/test', (req, res) => {
    const date = {
        "name": "Fazt",
        "website": "faztweb.com"
    };
    res.json(data);
});

module.exports = router;