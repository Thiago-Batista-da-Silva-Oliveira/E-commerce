import bcrypt from 'bcryptjs'

const data = {
    users: [
        {
          name: 'Thiago',
          email: 'admin@example.com',
          password: bcrypt.hashSync('1234',8),
          isAdmin: true,
        },
        {
          name: 'Thiago',
          email: 'thiagoliveira01@globomail.com',
          password: bcrypt.hashSync('1234',8),
          isAdmin: false,
        },
      ],
    products:[
        {
           //id will be created in the database
            name:'Nike Slim Shirt',
            category: 'Shirts',
            image:'/images/product-one.jpg',
            price: 140,
            countInStock:10,
            brand: 'Nike',
            rating: 5,
            numReviews: 10,
            description: 'high quality product'
        },
        {
            
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