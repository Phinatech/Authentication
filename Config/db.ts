import mongoose from "mongoose";

const Db_URL = "mongodb://localhost/Authclass"

 const DbConnection =async () => {
 try {
       const authCont = await mongoose.connect(Db_URL);
       console.log(`Db is connected to: ${authCont.connection.host}`);
 } catch (error:any) {
    console.log(error.message);
 }
}
 export default DbConnection












// import mongoose from "mongoose";
// const DB: string = "mongodb://localhost/Authclass";

// export default async function DBconnect() {
//   try {
//     const myConnection = await mongoose.connect(DB);
//     console.log(`DB is connected to ${myConnection.connection.host}`);
//   } catch (error) {
//     console.log("Unable to connect");
//   }
// }