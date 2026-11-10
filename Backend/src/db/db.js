// import dns from 'node:dns/promises'
// dns.setServers(['1.1.1.1','8.8.8.8'])

// import mongoose from "mongoose"
// main().catch(err => console.log(err));

// async function main() {
//   try{
//   await mongoose.connect('mongodb+srv://rafiapanjwani7_db_user:HR2JefyWCzhfPiDq@chatapp.kix1k9z.mongodb.net/chatapp');
//   console.log("Connected to DB");
//   }
//    catch(err){
//     console.log("error Connecting to DB",err)
//   }
  
// }
// export default main
import dns from 'dns';
dns.setServers(['1.1.1.1', '8.8.8.8']);

import mongoose from "mongoose";

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Connected to DB");
  } catch (err) {
    console.log("error Connecting to DB", err);
  }
}


export default connectDB;