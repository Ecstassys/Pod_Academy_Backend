const express = require('express');
const { connectToDatabase } = require('./config/database'); 

const app = express();
const PORT = 8000;


app.use(express.json());

async function startServer() {
  try {
    
    await connectToDatabase();
    
   
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    
    console.error("Error connecting to MongoDB. Server not started.", error.message);
    process.exit(1); 
  }
}


startServer();
