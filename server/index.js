import express from 'express';
import bodyParser from 'body-parser'; 
import mongoose from 'mongoose'; 
import cors from 'cors'; 
import postRoutes from './routes/posts.js'; 

// initalize the express app 
const app = express(); 

// Setup the routes, we set a prefix /posts for our posts file
app.use('/posts', postRoutes);

// Set limits for images
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());

// Get to use cloud atlas mongoDB

const CONNECTION_URL = 'mongodb+srv://tabish_rashidi1:PzJ7bEsQVxmy22S@cluster0.ddk6s.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'; 
const PORT = process.env.PORT || 5000; 

// Params are to avoid logged console errors
mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    // if successful connects
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    // if unsuccessful
    .catch((error) => console.log(error.message)); 


