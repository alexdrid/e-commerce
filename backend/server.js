import express from 'express';
import dotenv from 'dotenv'
import connectDB from './config/db.js';

import productRoutes from "./routes/productRoutes.js"
import { errorHandler, notFound } from './middleware/errorMiddleWare.js';

dotenv.config()

connectDB()
const app = express()

app.get("/", (req, res) =>
    res.send('Hello Darkness My Old Friend')
)

app.use('/api/products', productRoutes)

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(
    PORT,
    console.log(
        `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
    )
)