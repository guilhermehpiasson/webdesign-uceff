const express = require('express')
const cors = require('cors');

const app = express();

// Allow all origins for testing purposes
app.use(cors());
app.use(express.json());
app.get('/', (req,res) => {
    return res.status(200).json({msg: 'server is running'})
}
);

require("./routes/app.router")(app);
app.listen(process.env.PORT || 3000, () => {
    console.log('app running')
})