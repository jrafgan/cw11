const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Category = require('../models/Category');

router.get('/', async (req, res) => {
    console.log(req.params.id);
    if (req.query.id) {
        const id = req.query.id;

        const categories = await Category.find({_id: id}).sort({datetime: -1});
        if (categories) res.send(categories);
        else res.sendStatus(500);
    } else {

    const categories = await Category.find().sort({datetime: -1});
    if (categories) res.send(categories);
    else res.sendStatus(500);
}

});

router.get('/:id', async (req, res) => {
    console.log(req.params.id);
        const id = req.params.id;

        const categories = await Category.find({_id: id});
        if (categories) res.send(categories);
        else res.sendStatus(500);
});

router.post('/', auth, async (req, res) => {
    try {
        // console.log(req.body, req.user._id);
        // req.body.user = req.user._id;
        const postData = new Category(req.body);

        await postData.save();
        res.status(200).send(postData);

    } catch (error) {
        return res.status(400).send(error)
    }

});

module.exports = router;