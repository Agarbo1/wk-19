const express = require('express');
const app = express();
app.use(express.json())

app.get("/", (req, res) => {
    res.send('WHADDUP CUH')
})

app.get("/status", (req, res) => {
    res.send("IT'S ALIIIIVE!!!")
})

const port = 5000;
app.listen(port, () => console.log(`Server is listening on port ${port}`));
