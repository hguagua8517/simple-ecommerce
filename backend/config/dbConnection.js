// Desc: MongoDB connection
import mongoose from 'mongoose';
import dotenv from 'dotenv';


dotenv.config();


export const dbConnection = async () => {
    try {
        const connection = await mongoose.connect(process.env.Mongo_URI);
        console.log(`MongoDB connected: ${connection.connection.host}`);
    } catch (error) {
        console.log(`Error: ~${error.message}`);
        process.exit(1); //process code 1 = exit with error
    }
};

export default dbConnection;