import mongoose from 'mongoose'; 


// Create mongoose schema; architecture for DB 
// Each post have the following 

const postSchema = mongoose.Schema ({
    title: String, 
    message: String, 
    creator: String, 
    tags: [String], 
    selectedFile: String,
    likeCount: {
        type: Number, 
        default: 0
    }, 
    createdAt: {
        type: Date, 
        default: new Date()
    }
});

const PostMessage = mongoose.model('PostMessage', postSchema);

// Export mongoose model and run commands that follow CRUD 
export default PostMessage; 