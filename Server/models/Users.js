import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type: String
    },
    email:{
        type: String
    },
    password:{
        type: String
    }
}, {timestamps: true})

const Users = mongoose.model("users" ,userSchema)
export default Users