const Product = require("../models/productModel");


// Create Product
exports.createProduct = async (res,req,next)=> {
    const product = await Product.create(req.body);

    res.status(201).json({
        success:true,
        product
    });
};


exports.getAllProducts = (req,res)=> {
    res.status(200).json({message:"Route is working Fine"});
};