const express = require('express');

import adminRoutes from "./routes/adminRoutes.js";
import productRoutes from "./routes/productRoutes.js";

const app = express();

app.use(express.json());

app.use("/api/admin", adminRoutes);


app.use("/api/products", productRoutes);


app.listen(5000,() =>{
    console.log("Server is running on port 5000");
})