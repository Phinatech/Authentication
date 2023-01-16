import mongoose from "mongoose";
const DB: string = "mongodb://localhost/Authclass"

export default async function DBconnect(){
    try {
        const myConnection = await mongoose.connect(DB);
        console.log(`DB is connected to ${myConnection.connection.host}`)
    } catch (error) {
        console.log("Unable to connect")
    }
}