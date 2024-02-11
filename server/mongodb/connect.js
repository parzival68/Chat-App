import mongoose from "mongoose";

const connect = async() => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("Connected to MongoDB");
    } catch (err) {
        console.error(err);
    }
}

export default connect;