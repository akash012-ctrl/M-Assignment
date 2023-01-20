import mongoose from 'mongoose';


// mongoose.connect(process.env.MONGO_URL, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

const DB_URL= process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/medbikri-assignment' ;
mongoose.connect(DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.log('Error: ', err);
});



