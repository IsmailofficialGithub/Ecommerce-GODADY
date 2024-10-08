import mongoose from "mongoose";

const productSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    description:{
        type:String,
        require:true,
    },
    slug:{
        type:String,
        require:true,
    },
    price:{
        type:Number,
        require:true,
    },
    catagory:{
        type:mongoose.ObjectId,
        ref:'catagory',
        require:true
    },
    quantity:{
        type:Number,
        require:true,
    },
    photos:{
        data:Buffer,
         contentType:String,
    },
    shipping:{
        type:Boolean,
    }
},{timestamps:true})

export default mongoose.model('Product',productSchema)