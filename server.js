const express = require('express')
const path = require('path')
const cors = require('cors')

// Initialize the Express app
const app = express()

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, "public")))

// Allow CORS too the client | Frontend.
// const corsOptions = {
//   origin: 'https://backend-production-1cdd.up.railway.app/',
//   optionsSuccessStatus: 200
// };
// app.use(cors(corsOptions));
app.use(cors());

// dotenv setup
require('dotenv').config()

// Roots
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Controllers
//   N/A for now!

const port = process.env.PORT || 1010
app.listen(port, () => {
  console.log(`🎣 Fishing on port: ${port}`)
})