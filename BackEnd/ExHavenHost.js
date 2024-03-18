//imports
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const app = express();
require('dotenv').config();
const port = process.env.DB_PORT;

//middelware dependencies
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.json());

//database credentials
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const hostname = process.env.DB_HOSTNAME;
const database = process.env.DB_DATABASE;
const uri = `mongodb+srv://${encodeURIComponent(username)}:${encodeURIComponent(password)}@${host}/${database}?retryWrites=true&w=majority`;

async function databaseConnection() {
    try {
        await mongoose.connect(uri);
        console.log('Mongo atlas connected');
    } catch (err) {
        console.log('Error:', err);
        process.exit(1);
    }
} databaseConnection();

//schemas
const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String,
    admin: Boolean
});

const reptileSchema = new mongoose.Schema({
    name: String,
    species: String,
    age: Number,
    price: Number,
    description: String,
    image: String,
    stock: Number
});

const birdSchema = new mongoose.Schema({
    name: String,
    species: String,
    age: Number,
    price: Number,
    description: String,
    image: String,
    stock: Number
});

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    image: String,
    description: String,
    stock: Number
});

const foodSchema = new mongoose.Schema({
    name: String,
    price: Number,
    image: String,
    description: String,
    stock: Number
});

const orderSchema = new mongoose.Schema({
    username: String,
    products: Array,
    total: Number
});

//models for calling within routing
const UserModel = mongoose.model('User', userSchema);
const ReptileModel = mongoose.model('Reptile', reptileSchema);
const BirdModel = mongoose.model('Bird', birdSchema);
const ProductModel = mongoose.model('Product', productSchema);
const FoodModel = mongoose.model('Food', foodSchema);
const OrderModel = mongoose.model('Order', orderSchema);

//
//METHODS
//


//GET Methods
app.get('/api/getReptiles', async (req, res) => {
    try {
        const reptiles = await ReptileModel.find(); //querys mongodb for all reptiles
        res.send(reptiles);
    } catch (err) {
        console.log('Error:', err);
    }
});

app.get('/api/getBirds', async (req, res) => {
    try {
        const birds = await BirdModel.find(); //querys mongodb for all birds
        res.send(birds);
    } catch (err) {
        console.log('Error:', err);
    }
});

app.get('/api/getProducts', async (req, res) => {
    try {
        const products = await ProductModel.find(); //querys mongodb for all products
        res.send(products);
    } catch (err) {
        console.log('Error:', err);
    }
});

app.get('/api/getFood', async (req, res) => {
    try {
        const food = await FoodModel.find(); //querys mongodb for all food
        res.send(food);
    } catch (err) {
        console.log('Error:', err);
    }
});


//POST Methods
app.post('/api/addReptile', async (req, res) => {
    try {
        const newReptile = new ReptileModel(req.body); //creates new reptile object
        const savedReptile = await newReptile.save(); //saves new reptile to mongodb
        res.status(201).send(savedReptile);
    } catch (err) {
        console.log('Error:', err);
    }
});

app.post('/api/addBird', async (req, res) => {
    try {
        const newBird = new BirdModel(req.body); //creates new bird object
        const savedBird = await newBird.save(); //saves new bird to mongodb
        res.status(201).send(savedBird);
    } catch (err) {
        console.log('Error:', err);
    }
});

app.post('/api/addProduct', async (req, res) => {
    try {
        const newProduct = new ProductModel(req.body); //creates new product object
        const savedProduct = await newProduct.save(); //saves new product to mongodb
        res.status(201).send(savedProduct);
    } catch (err) {
        console.log('Error:', err);
    }
});

app.post('/api/addFood', async (req, res) => {
    try {
        const newFood = new FoodModel(req.body); //creates new food object
        const savedFood = await newFood.save(); //saves new food to mongodb
        res.status(201).send(savedFood);
    } catch (err) {
        console.log('Error:', err);
    }
});

//PUT Methods
app.put('/api/updateReptile/:id', async (req, res) => {
    try {
        const updatedReptile = await ReptileModel.findByIdAndUpdate (
            req.params.id, //finds reptile by id
            req.body, //updates reptile with new data
            { new: true }
        ); if (!updatedReptile) {
            res.status(404).send('Reptile not found');
        }
        res.status(200).send(updatedReptile);
    } catch (err) {
        console.log('Error:', err);
    }
});

app.put('/api/updateBird/:id', async (req, res) => {
    try {
        const updatedBird = await BirdModel.findByIdAndUpdate (
            req.params.id, //finds bird by id
            req.body, //updates bird with new data
            { new: true }
        ); if (!updatedBird) {
            res.status(404).send('Bird not found');
        }
        res.status(200).send(updatedBird);
    } catch (err) {
        console.log('Error:', err);
    }
});

app.put('/api/updateProduct/:id', async (req, res) => {
    try {
        const updatedProduct = await ProductModel.findByIdAndUpdate (
            req.params.id, //finds product by id
            req.body, //updates product with new data
            { new: true }
        ); if (!updatedProduct) {
            res.status(404).send('Product not found');
        }
        res.status(200).send(updatedProduct);
    } catch (err) {
        console.log('Error:', err);
    }
});

app.put('/api/updateFood/:id', async (req, res) => {
    try {
        const updatedFood = await FoodModel.findByIdAndUpdate (
            req.params.id, //finds food by id
            req.body, //updates food with new data
            { new: true }
        ); if (!updatedFood) {
            res.status(404).send('Food not found');
        }
        res.status(200).send(updatedFood);
    } catch (err) {
        console.log('Error:', err);
    }
});


//DELETE Methods
app.delete('/api/deleteReptile/:id', async (req, res) => {
    try {
        const deletedReptile = await ReptileModel.findByIdAndDelete(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!deletedReptile) {
            res.status(404).send('Reptile not found');
        }
        res.status(200).send(deletedReptile);
    } catch (err) {
        console.log('Error:', err);
    }
});

app.delete('/api/deleteBird/:id', async (req, res) => {
    try {
        const deletedBird = await BirdModel.findByIdAndDelete(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!deletedBird) {
            res.status(404).send('Bird not found');
        }
        res.status(200).send(deletedBird);
    } catch (err) {
        console.log('Error:', err);
    }
});

app.delete('/api/deleteProduct/:id', async (req, res) => {
    try {
        const deletedProduct = await ProductModel.findByIdAndDelete(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!deletedProduct) {
            res.status(404).send('Product not found');
        }
        res.status(200).send(deletedProduct);
    } catch (err) {
        console.log('Error:', err);
    }
});

app.delete('/api/deleteFood/:id', async (req, res) => {
    try {
        const deletedFood = await FoodModel.findByIdAndDelete(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!deletedFood) {
            res.status(404).send('Food not found');
        }
        res.status(200).send(deletedFood);
    } catch (err) {
        console.log('Error:', err);
    }
});

//PORT
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});


