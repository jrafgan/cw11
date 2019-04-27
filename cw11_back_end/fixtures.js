const mongoose = require('mongoose');
const config = require('./config');
const Product = require('./models/Product');
const User = require('./models/User');
const Category = require('./models/Category');

const run = async () => {
    await mongoose.connect(config.dbUrl, config.mongoOptions);

    const connection = mongoose.connection;

    const collections = await connection.db.collections();

    for (let collection of collections) {
        await collection.drop();
    }


    const [user1, user2, user3] = await User.create(
        {
            username: 'John',
            password: '123',
            displayName: 'john_bone',
            phoneNumber: '+996502256654',
            token: 'BDzBeqP8qZQiuLbONAO78'
        },
        {
            username: 'Alan',
            password: '123',
            displayName: 'alan001',
            phoneNumber: '+996502888888',
            token: 'v7lIEcpl_enRPJOVjNBAG'
        },
        {
            username: 'Don',
            password: '123',
            displayName: 'carleone',
            phoneNumber: '+996502888999',
            token: 'R2Hb9XqWnK_cCOyP4Ml85'
        }
    );

    const [category1, category2, category3, category4, category5] = await Category.create(
        {
            title: 'Computers',
        },
        {
            title: 'Cars',
        },
        {
            title: 'Furniture',
        },
        {
            title: 'Clothes',
        },
        {
            title: 'Food',
        }
    );

    await Product.create(
        {
            user: user1._id,
            category: category1._id,
            title: 'Acer Aspire TC-885-ACCFLi5O Desktop',
            description: 'Acer Aspire TC-885-ACCFLi5O Desktop, 8th Gen Intel Core i5-8400, 8GB DDR4 + 16GB Optane Memory, 2TB HDD, 8X DVD, 802.11ac WiFi, Windows 10 Home',
            image: 'acer.png',
            price: 25000,
        },
        {
            user: user1._id,
            category: category1._id,
            title: '2019 Premium Flagship Lenovo',
            description: '2019 Premium Flagship Lenovo IdeaCentre 310S Small Form Tiny Business Desktop - Intel Quad-Core Pentium J4205 Up to 2.6GHz HDMI 802.11ac DVDRW Bluetooth USB 3.0 Win 10 -Upgrade up to 8G RAM 1TB SSD',
            image: 'lenovo.jpg',
            price: 35000,
        },
        {
            user: user2._id,
            category: category1._id,
            title: 'Premium 2018 Samsung Notebook 7',
            description: 'Premium 2018 Samsung Notebook 7 Spin 13.3" 2-in-1 FHD Touchscreen Business Laptop/Tablet Intel Core i5-8250U >i7-7500u 8GB RAM 256GB/512GB/1TB SSD Win Ink Backlit Keyboard Fingerprint Reader Win 10',
            image: 'samsung_lt.jpg',
            price: 45000,
        },
        {
            user: user3._id,
            category: category1._id,
            title: 'TOSHIBA Tecra A50-E 15.6',
            description: '2019 TOSHIBA Tecra A50-E 15.6" Business Laptop Computer, 8th Gen Quad-Core i7-8550U up to 4.0GHz, 16GB DDR4 RAM, 1TB SSD, DVDRW, 802.11ac WiFi, Bluetooth, HDMI, USB 3.0, Windows 10 Professional',
            image: 'toshiba.jpeg',
            price: 30000,
        },
        {
            user: user3._id,
            category: category1._id,
            title: 'TOSHIBA Tecra A50-E 15.6',
            description: '2019 TOSHIBA Tecra A50-E 15.6" Business Laptop Computer, 8th Gen Quad-Core i7-8550U up to 4.0GHz, 16GB DDR4 RAM, 1TB SSD, DVDRW, 802.11ac WiFi, Bluetooth, HDMI, USB 3.0, Windows 10 Professional',
            image: 'acer.png',
            price: 40000,
        },
        {
            user: user2._id,
            category: category1._id,
            title: 'TOSHIBA Tecra A50-E 15.6',
            description: '2019 TOSHIBA Tecra A50-E 15.6" Business Laptop Computer, 8th Gen Quad-Core i7-8550U up to 4.0GHz, 16GB DDR4 RAM, 1TB SSD, DVDRW, 802.11ac WiFi, Bluetooth, HDMI, USB 3.0, Windows 10 Professional',
            image: 'samsung_lt.jpg',
            price: 40000,
        },
        {
            user: user1._id,
            category: category2._id,
            title: 'Acura CPO',
            description: 'Acura is also giving dealers an unadvertised dealer cash incentive worth $300 that can be used to help lower prices. Dealers arent obligated to pass it along, but it could create some additional room for negotiation this month',
            image: 'acura.png',
            price: 400000,
        },
        {
            user: user2._id,
            category: category2._id,
            title: 'Mercedes-Benz E-Class 2018',
            description: 'Год выпуска: 2018 г.\n' +
                'Этот автомобиль на заказ из США, попадает под действие Постановления «о снижении единой ставки таможенных пошлин». Цена на машину указана с учетом всех расходов, включая транспортные расходы на перевозку, таможенные платежи и комиссионные компании.',
            image: 'mercedes.jpeg',
            price: 3000000,
        },
        {
            user: user3._id,
            category: category2._id,
            title: 'BMW 535 2013',
            description: 'Авто на заказ из США! Цена на машину указана с учетом всех расходов на доставку и таможенные пошлины. Звоните нам и мы привезем для вас любое авто по вашим запросам! ',
            image: 'bmw.jpeg',
            price: 1000000,
        },
        {
            user: user2._id,
            category: category2._id,
            title: 'Sequoia',
            description: 'Авто на заказ из США! Цена на машину указана с учетом всех расходов на доставку и таможенные пошлины. Звоните нам и мы привезем для вас любое авто по вашим запросам! \n' +
                'Компания W8 Shipping – американский автомобильный дилер, прямой поставщик автомобилей из США в Кыргызстан. В Кыргызстане мы работам без посредников и гарантируем покупателям самые низкие цены на автомобили из Америки, полную сохранность машины в пути во время перевозки в Бишкек, а так же быстрые сроки доставки из любого штата США.',
            image: 'sequoia.jpeg',
            price: 4000000,
        },
        {
            user: user1._id,
            category: category2._id,
            title: 'Mercedes-Benz E-Class 2014',
            description: 'Этот автомобиль на заказ из США, попадает под действие Постановления «о снижении единой ставки таможенных пошлин». Цена на машину указана с учетом всех расходов, включая транспортные расходы на перевозку, таможенные платежи и комиссионные компании. ',
            image: 'mercedes2.jpeg',
            price: 2000000,
        },
        {
            user: user1._id,
            category: category3._id,
            title: 'Диван',
            description: 'стили кухонной мебели, фабрика одеял и подушек, стол 4 метра, диван кресло раскладной, с мягкий мебель, расчет размеров кухонной мебели, мягкая кожаная мебель, уголок со столом, сочетание цветов в кухонной мебели, деревянные фасады кухонной  ',
            image: 'divan.jpeg',
            price: 20000,
        },
        {
            user: user2._id,
            category: category3._id,
            title: 'Спальня',
            description: 'Пожалуйста, скажите продавцу, что увидели это объявление на   lalafo.kg',
            image: 'spalnya.jpeg',
            price: 50000,
        },
        {
            user: user3._id,
            category: category3._id,
            title: 'Стенка',
            description: 'Пожалуйста, скажите продавцу, что увидели это объявление на   lalafo.kg',
            image: 'stenka.jpeg',
            price: 2000,
        },
        {
            user: user1._id,
            category: category4._id,
            title: 'Толстовка',
            description: 'Пожалуйста, скажите продавцу, что увидели это объявление на   lalafo.kg',
            image: 'tolstovka.jpeg',
            price: 80,
        },
        {
            user: user2._id,
            category: category4._id,
            title: 'Кепка',
            description: 'Пожалуйста, скажите продавцу, что увидели это объявление на   lalafo.kg',
            image: 'kepka.jpeg',
            price: 120,
        },
        {
            user: user3._id,
            category: category4._id,
            title: 'Джинсы',
            description: 'Пожалуйста, скажите продавцу, что увидели это объявление на   lalafo.kg',
            image: 'jeans.jpeg',
            price: 200,
        },
        {
            user: user1._id,
            category: category5._id,
            title: 'Продаю морковь',
            description: 'Пожалуйста, скажите продавцу, что увидели это объявление на   lalafo.kg',
            image: 'morkovka.jpeg',
            price: 10,
        },
        {
            user: user2._id,
            category: category5._id,
            title: '1тонна мешок 320 сом',
            description: 'Пожалуйста, скажите продавцу, что увидели это объявление на   lalafo.kg',
            image: 'kartoshka.jpeg',
            price: 320,
        },
        {
            user: user3._id,
            category: category5._id,
            title: 'Продаю яблоки',
            description: 'семечки полосатый, чайный гриб, рис круглозерный кубанский, мясо говядины, свежие овощи, чистый мед, семечки, опт мыло, мясо курицы оптом, перепелиные тушки, energydiet, перга, витамины витрум, сырые семечки, подсолнечное масло россия, у вас дома, обед ',
            image: 'apples.jpeg',
            price: 20,
        },
    );


    return connection.close();
};

run().catch(error => {
    console.error('Something went wrong!', error);
});