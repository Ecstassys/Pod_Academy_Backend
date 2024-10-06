const express = require('express')
const app = express();

app.use(express.json());


app.get('/', (req, res) => {
    res.send("This is PodAcademy Backend")

});


const PORT = 8000;
app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`);
})

