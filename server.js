const express = require('express')
const path = require('path')
const cors = require('cors')

// Create express app
const app = express();
app.use(cors())
// Allow CORS too the client | Frontend.
// const corsOptions = {
//   origin: 'https://backend-production-1cdd.up.railway.app/',
//   optionsSuccessStatus: 200
// };
// app.use(cors(corsOptions));

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, "public")))

// CONFIGURATION / MIDDLEWARE
require('dotenv').config();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Roots
app.get('/api', (req, res) => {
  console.log('You are in the [/api] root')
  res.status(200).json({
    message: 'Hey there 👋, you are in the [/api] root'
  })
})

// Controllers
//   N/A for now!

// Listen
const port = process.env.PORT || 1010
app.listen(port, () => {
  console.log(`🎣 Fishing on port: ${port}`)
})