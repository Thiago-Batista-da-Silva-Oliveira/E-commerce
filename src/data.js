const data = {
    users: [
        {
          name: 'Basir',
          email: 'admin@example.com',
          password: bcrypt.hashSync('1234', 8),
          isAdmin: false,
        },
        {
          name: 'John',
          email: 'user@example.com',
          password: bcrypt.hashSync('1234', 8),
          isAdmin: false,
        },
        {
            name: 'Geovani',
            email: 'ge@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false,
          },
      ],
    products:[
        {
            _id:'1',
            name:'Nike Slim Shirt',
            category: 'Shirts',
            image:'/images/product-one.jpg',
            price: 120,
            countInStock:10,
            brand: 'Nike',
            rating: 5,
            numReviews: 10,
            description: 'high quality product'
        },
        {
            _id:'2',
            name:'Adidas Fit Shirt',
            category: 'Shirts',
            image:'/images/p2.jpg',
            price: 100,
            countInStock:4,
            brand: 'Adidas',
            rating: 4,
            numReviews: 10,
            description: 'high quality product'
        },
        {
            _id:'3',
            name:'Lacoste Free Shirt',
            category: 'Shirts',
            image:'/images/p3.jpg',
            price: 220,
            countInStock:6,
            brand: 'Lacoste',
            rating: 4.5,
            numReviews: 17,
            description: 'high quality product'
        },
        {
            _id:'4',
            name:'Nike Slim Pant',
            category: 'Pants',
            image:'/images/p4.jpg',
            price: 78,
            countInStock:5,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product'
        },
        {
            _id:'5',
            name:'Puma Slim Shirt',
            category: 'Pants',
            image:'/images/p5.jpg',
            price: 65,
            countInStock:0,
            brand: 'Puma',
            rating: 5,
            numReviews: 10,
            description: 'high quality product'
        },
        {
            _id:'6',
            name:'Adidas Fit Pant',
            category: 'Pants',
            image:'/images/p6.jpg',
            price: 139,
            countInStock:12,
            brand: 'Adidas',
            rating: 4.5,
            numReviews: 15,
            description: 'high quality product'
        },
    ]
}

export default data