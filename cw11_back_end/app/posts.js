const express = require('express');
const Post = require('../models/Post');
const router = express.Router();
const auth = require('../middleware/auth');
const Comment = require('../models/Comment');
const multer = require('multer');
const path = require('path');
const config = require('../config');
const nanoid = require('nanoid');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, config.uploadPath);
    },
    filename: (req, file, cb) => {
        cb(null, nanoid() + path.extname(file.originalname));
    }
});

const upload = multer({storage});

router.get('/', async (req, res) => {
    if (req.query.id) {
        const id = req.query.id;

        const post = await Post.find({_id: id}).sort({datetime: -1});
        if (post) res.send(post);
        else res.sendStatus(500);
    } else {
        const posts = await Post.find().populate('user').sort({datetime: -1});

        // posts[0].count = counts[0];
        //
        // Promise.all(posts.map((post) => {
        //     return Comment.count({post: post._id})
        // })).then((counts)=> {
        //     res.send({posts: posts, counts: counts})
        // });


        const result = await posts.map( item=> Comment.find({_id: item._id}));
        console.log('this is result ', result);
        if (posts) res.send(posts);
        else res.sendStatus(500);
    }

});

router.post('/', auth, upload.single('image'), async (req, res) => {
    try {

        const postData = {
            title: req.body.title,
            description: req.body.description
        };

        postData.user = req.user._id;
        if (req.file) {
            postData.image = req.file.filename;
        }
        const post = new Post(postData);
        console.log('this. is post before save ', post);
        await post.save();
        const posts = await Post.find().populate('user').sort({datetime: -1});
        res.status(200).send(posts);

    } catch (error) {
        return res.status(400).send(error)
    }

});

module.exports = router;