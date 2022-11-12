
import bcrypt from "bcryptjs";

const data = {
    users: [
        {
            name: 'Zihnee',
            email: 'admin@resellersmv.com',
            password: bcrypt.hashSync('admin123456'),
            isAdmin: true,
        },
        {
            name: 'Mohamed',
            email: 'user@resellersmv.com',
            password: bcrypt.hashSync('user123456'),
            isAdmin: false,
        },
    ],

    products: [
        {
            // _id: '1',
            name: 'Nike Slim Shirt',
            slug: 'nike-slim-shirt',
            category: 'shirts',
            image: '/images/p1.jpg', // 679px x 829px
            price: 120,
            countInStock: 10,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 10,
            description: 'High quality shirt',
        },
        {
            // _id: '2',
            name: 'Adidas Fit Shirt',
            slug: 'adidas-fit-shirt',
            category: 'shirts',
            image: '/images/p2.jpg',
            price: 250,
            countInStock: 0,
            brand: 'Adidas',
            rating: 4.0,
            numReviews: 10,
            description: 'High quality product',
        },
        {
            // _id: '3',
            name: 'Nike Slim Pants',
            slug: 'nike-slim-pants',
            category: 'Pants',
            image: '/images/p3.jpg',
            price: 25,
            countInStock: 15,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 14,
            description: 'High quality product',
        },
        {
            // _id: '4',
            name: 'Adidas Fit Pants',
            slug: 'adidas-fit-pants',
            category: 'Pants',
            image: '/images/p4.jpg',
            price: 65,
            countInStock: 5,
            brand: 'Puma',
            rating: 4.5,
            numReviews: 10,
            description: 'High quality product',
        },
    ],
};

export default data;