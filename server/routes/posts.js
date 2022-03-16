import express from 'express'; 

const router = express.Router(); 

// Activates when someone accesses the page
router.get('/', (req, res) => {

    res.send("This works!");

}); 

export default router; 