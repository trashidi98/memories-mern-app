import express from 'express'; 
import {getPosts, createPost} from "../controllers/posts.js";

const router = express.Router(); 

// Activates when someone accesses the page
router.get('/', getPosts); 

router.post('/', createPost);



export default router; 