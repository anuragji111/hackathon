
const express = require('express');
const mongoose = require('mongoose');

const app = express();


mongoose.connect('mongodb://localhost:27017/my_database', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

const Schema = mongoose.Schema;
const productSchema = new Schema({
    name: String,
    price: Number,
    description: String
});

const Product = mongoose.model('Product', productSchema);


app.use(express.json());

app.post('/products', async (req, res) => {
    try {
        
        const product = new Product(req.body);
       
        await product.save();
        
        res.status(201).json(product);
    } catch (error) {
        
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
