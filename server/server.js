const express = require('express');

const app = express();

app.use(express.json());

app.use("/api/products", productRoutes);


app.listen(5000,() =>{
    console.log("Server is running on port 5000");
})