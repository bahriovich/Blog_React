import mongoose from 'mongoose';

const Connection = async (username, password) => {
    try {
        await mongoose.connect(process.env.MONGO_URI, { dbName: "BlogDB" }) //(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;

