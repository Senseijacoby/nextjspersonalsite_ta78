import mongoose from "mongoose";

const uri = process.env.MONGO_URI;
const options = {}
export default async function connectToDB() {

    try {
        await mongoose.connect(
            uri, options

        );
        console.log("Database connected successfully");
    } catch (e) {
        console.log(e);
    }
}

