import express from 'express';
import dotenv from 'dotenv'; //connects to .env variables
import colors from 'colors';

import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';

dotenv.config();
connectDB();

const app = express(); //creates the backend server

app.get('/', (req, res) => {
	res.send('API is running....');
});

app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 5000; //instead of hardcoded port

app.listen(
	PORT,
	console.log(
		`server running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold
	)
);
