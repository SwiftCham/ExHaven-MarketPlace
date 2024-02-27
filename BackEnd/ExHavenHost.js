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
