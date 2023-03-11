const {Router} = require("express");
const Image = require('../models/image');

const router = Router();



router.post('/post', async (req, res) => {
    const image = new Image();
    image.title = req.body.label;
    image.imageUrl = req.body.url;
    console.log(image);
    await image.save();

    res.redirect('/');

});

module.exports = router;