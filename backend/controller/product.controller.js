import Product from '../models/product.model.js';
import mongoose from 'mongoose';

export const createProducts =  async (req, res) => {
        const product = req.body; //obteniendo la data del producto enviado por el usuario
        if (!product.name || !product.price || !product.imageUrl) {
          return res.status(400).json({ success: false , message: 'All fields are required' });
        }
      
        const newProduct = new Product(product);
        try {
          await newProduct.save();
          res.status(201).json({ success: true, data: newProduct });
        } catch (error) {
          console.error('Error in create product', error.message);
          res.status(500).json({ success: false, message: 'Server Error' });
        }
            
};

export const getProducts = async (req, res) => {
    try {
     const products = await Product.find({});
     res.status(200).json({ success: true, data: products });
     console.log(products);
    } catch (error) {
     console.error('Error in get products', error.message);
     res.status(500).json({ success: false, message: 'Server Error' });
     
    }
   }

export const getProductsById = async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      if (!product) {
        return res.status(404).json({ success: false, message: 'Product not found' });
      }else {
        res.status(200).json({ success: true, data: product });
      }
    } catch (error) {
      console.error('Error in get product by id', error.message);
      res.status(500).json({ success: false, message: 'Server Error' });    
    }
};

export const deleteProduct = async (req, res) => {
  
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: 'Invalid product id' });
      }
    
    try {
      await Product.findByIdAndDelete(id);
      res.status(200).json({ success: true, message: 'Product deleted successfully' });
    } catch (error) {
      console.error('Error in delete product by id', error.message);
      res.status(500).json({ success: false, message: 'Server Error' });    
    }
  };

  export const updateProduct = async (req, res) => {
    const { id } = req.params;
    const product = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ success: false, message: 'Invalid product id' });
    }
  
    try {
      const updatedProduct = await Product.findByIdAndUpdate(id, product, { new: true });
      res.status(200).json({ success: true, data: updatedProduct });
    } catch (error) {
      console.error('Error in update product by id', error.message);
      res.status(500).json({ success: false, message: 'Server Error' });
    }
  }; 