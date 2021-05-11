import express from 'express';
import dotenv from 'dotenv'; //connects to .env variables
import products from './data/products.js';
dotenv.config();

const app = express(); //creates the backend server

app.get('/', (req, res) => {
	res.send('API is running....');
});

app.get('/api/products', (req, res) => {
	//establish a route for the products server
	res.json(products);
});

app.get('/api/products/:id', (req, res) => {
	//finds the exacts product based on the id
	const product = products.find((p) => p._id === req.params.id);
	res.json(product);
});
const PORT = process.env.PORT || 5000; //instead of hardcoded port

app.listen(
	PORT,
	console.log(`server running in ${process.env.NODE_ENV} on port ${PORT}`)
);
