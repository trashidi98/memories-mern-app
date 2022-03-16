import express from 'express';
import bodyParser from 'body-parser'; 
import mongoose from 'mongoose'; 
import cors from 'cors'; 
import postRoutes from './routes/posts.js'; 
import dotenv from "dotenv";

// initalize the express app 
const app = express(); 

// Use env variables
dotenv.config(); 

// Setup the routes, we set a prefix /posts for our posts file

// Set limits for images
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());

app.use('/posts', postRoutes);
// Get to use cloud atlas mongoDB
 
const PORT = process.env.PORT || 5000; 

// Params are to avoid logged console errors
mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    // if successful connects
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    // if unsuccessful
    .catch((error) => console.log(error.message)); 


