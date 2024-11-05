import express from 'express';
import Product from '../models/product.model.js';
import { getProducts, createProducts, getProductsById, deleteProduct,updateProduct } from '../controller/product.controller.js';


const router = express.Router();



//post products
  router.post('/', createProducts);
  
  //get all products
  router.get('/', getProducts);
  
  //get product by id
  router.get('/:id', getProductsById);
  
  //delete product by id
  router.delete('/:id', deleteProduct);
  
  //update product 
  router.put('/:id', updateProduct);
  

export default router;

