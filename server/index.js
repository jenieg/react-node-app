const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express ();

//Have Node Serve Files for React App
app.use(express.static(path.resolve(__dirname, '../client/build')));

//GET request on /api route
app.get('/api', (req,res) => {
    res.json({message: "Hello from the other side"})
});

//All other GET requests
app.get('*', (req,res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'))
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});