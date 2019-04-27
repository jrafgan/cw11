const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Comment = require('../models/Comment');

router.get('/', async (req, res) => {
    if (req.query.id) {
        const id = req.query.id;

        const comments = await Comment.find({post: id}).populate('post').populate('user').sort({datetime: -1});
        if (comments) res.send(comments);
        else res.sendStatus(500);
    } else {
    const comments = await Comment.find().sort({datetime: -1});
    if (comments) res.send(comments);
    else res.sendStatus(500);
}

});

router.post('/', auth, async (req, res) => {
    try {
        console.log(req.body, req.user._id);
        req.body.user = req.user._id;
        const commentData = new Comment(req.body);

        await commentData.save();
        res.status(200).send(commentData);

    } catch (error) {
        return res.status(400).send(error)
    }

});

module.exports = router;