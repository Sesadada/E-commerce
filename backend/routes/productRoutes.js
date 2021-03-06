import express from 'express';
import asyncHandler from 'express-async-handler';
const router = express.Router();
import Product from '../models/productModel.js';

//@desc Fetch all products
//@route GET /api/products
//@access Public

router.get(
	'/',
	asyncHandler(async (req, res) => {
		//establish a route for the products server
		const products = await Product.find({});
		res.json(products);
	})
);

//@desc Fetch single product
//@route GET /api/products/:id
//@access Public
router.get(
	'/:id',
	asyncHandler(async (req, res) => {
		//finds the exacts product based on the id
		const product = await Product.findById(req.params.id);
		if (product) {
			res.json(product);
		} else {
			res.status(404);
			throw new Error('Product not found');
		}
	})
);

export default router;
