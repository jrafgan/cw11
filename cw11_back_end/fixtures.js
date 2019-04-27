const mongoose = require('mongoose');
const config = require('./config');
const Comment = require('./models/Comment');
const Post = require('./models/Post');
const User = require('./models/User');

const run = async () => {
    await mongoose.connect(config.dbUrl, config.mongoOptions);

    const connection = mongoose.connection;

    const collections = await connection.db.collections();

    for (let collection of collections) {
        await collection.drop();
    }

    const [user1, user2, user3] = await User.create({
            username: 'John',
            password: '123',
            token: 'BDzBeqP8qZQiuLbONAO78'
        },
        {
            username: 'Brown',
            password: '123',
            token: 'v7lIEcpl_enRPJOVjNBAG'
        },
        {
            username: 'Alan',
            password: '123',
            token: 'R2Hb9XqWnK_cCOyP4Ml85'
        });

    const [post1, post2, post3] = await Post.create(
        {
            user: user1._id,
            title: '«Кино́» — одна из самых популярных советских рок-групп 1980-х годов.',
            description: 'Лидером и автором практически всех текстов и музыки неизменно оставался Виктор Цой, после смерти которого коллектив, выпустивший в общей сложности за девять лет на студийных альбомах более ста песен, несколько сборников и концертных записей, а также большое количество неофициальных бутлегов, прекратил существование.',
            image: 'kino.jpg'
        },
        {
            user: user2._id,
            title: 'The Cranberries — ирландская рок-группа, созданная в Лимерике в 1989 году, под названием The Cranberry Saw Us.',
            description: '',
            image: 'cranberries.jpg'
        },
        {
            user: user3._id,
            title: 'Э́ннио Моррико́не (итал. Ennio Morricone; род. 10 ноября 1928, Рим) — итальянский композитор, аранжировщик и дирижёр.',
            description: 'В основном пишет музыку для кино и телевидения. Великий офицер ордена «За заслуги перед Итальянской Республикой». Обладатель двух премий «Оскар»: за выдающиеся заслуги в кинематографе (2007) и за лучшую музыку — к «Омерзительной восьмёрке» (2016), 9-кратный лауреат национальной кинопремии Италии «Давид ди Донателло» за лучшую музыку к фильму, трёхкратный лауреат премии «Золотой глобус», 6-кратный лауреат премии BAFTA и многих других.',
            image: null
        },
    );

    await Comment.create(
        {
            post: post1._id,
            user: user1._id,
            comment: 'some comments1'
        },
        {
            post: post1._id,
            user: user1._id,
            comment: 'some comments2'
        },
        {
            post: post1._id,
            user: user1._id,
            comment: 'some comments3'
        },
        {
            post: post2._id,
            user: user2._id,
            comment: 'some comments4'
        },
        {
            post: post2._id,
            user: user2._id,
            comment: 'some comments5'
        },
        {
            post: post2._id,
            user: user2._id,
            comment: 'some comments6'
        },
        {
            post: post3._id,
            user: user3._id,
            comment: 'some comments7'
        },
        {
            post: post3._id,
            user: user3._id,
            comment: 'some comments8'
        },
        {
            post: post3._id,
            user: user3._id,
            comment: 'some comments9'
        },
    );


    return connection.close();
};

run().catch(error => {
    console.error('Something went wrong!', error);
});