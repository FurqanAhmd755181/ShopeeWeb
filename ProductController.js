import ProductStructModel from "../Models/ProductSchema.js";

const getProduct = async (req, res) => {
  const { category } = req.query;
  console.log("iam here at geting data...");

  try {
    const products = await ProductStructModel.find({ category });
    res.status(200).json(products);
  } catch (error) {
    console.log("Error retrieving products:", error);
    res.status(500).json({ error: "Failed to retrieve products" });
  }
};

const postProduct = async (req, res) => {
  console.log(req.body);
  const { price, category, imgUrl } = req.body;

  console.log("Operation Successful.....");

  const NewProduct = new ProductStructModel({
    price: price,
    category: category,
    imgurl: imgUrl,
  });

  try {
    await NewProduct.save();
    res.status(201).json(NewProduct);
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).json({ error: "Failed to create product" });
  }
};

export const DeleteProduct = async(req,res)=>
{
  console.log("Iam in delete product controller");
  const { id } = req.params;
  console.log(id);
 
  try {
    const Product = await ProductStructModel.findById(id);
    
    if (Product) {
      await ProductStructModel.findByIdAndDelete(id);
      res.status(200).json({ message: 'Product deleted successfully.' });
    } else {
      console.log(`Product with ID ${id} does not exist in the database.`);
      res.status(404).json({ error: `Product with ID ${id} does not exist in the database.` });
    }
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while deleting the Product.' });
  }
};

export const ProductUpdation = async(req,res)=>{
  const { id } = req.params;
  const {price,} = req.body;

  console.log(id,updatedData);

  try { 

    const userUpdate = await ProductStructModel.findByIdAndUpdate(id,
    );
    console.log(userUpdate);

    if (!userUpdate) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json(userUpdate); // Send the updated user data as the response
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while updating the registration' });
  }

}

export{postProduct,getProduct}

