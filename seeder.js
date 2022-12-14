import dotenv from 'dotenv'
import connectDB from "./config/db.js";
import User from "./models/userModel.js"
import Product from "./models/productModel.js"
import Order from "./models/orderModel.js"
import users from './data/users.js'
import products from './data/products.js'


dotenv.config()

connectDB()

const importData = async () => {
    try {
        await User.deleteMany()
        await Product.deleteMany()
        await Order.deleteMany()

        const createdUsers = await User.insertMany(users)
        
        const admin = createdUsers[0]._id

        const sampleProducts = products.map(product => {
            return {...product, user: admin}
        })

        await Product.insertMany(sampleProducts)

        console.log('Data imported...');

        process.exit()
    } catch (error) {
        console.error(`${error}`);
        process.exit(1)
    }
}


const destroyData = async () => {
    try {
        await User.deleteMany()
        await Product.deleteMany()
        await Order.deleteMany()

        await Product.insertMany(sampleProducts)

        console.log('Data destroyed...');

        process.exit()
    } catch (error) {
        console.error(`${error}`);
        process.exit(1)
    }
}

if(process.argv[2] === '-d') {
    destroyData()
} else {
    importData()
}