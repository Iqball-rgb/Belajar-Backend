const express = require("express");
const app= express();

const userRoutes=require("./routes/userRoutes");

app.use("/", userRoutes);
app.use(express.json());

app.listen(3000, ()=> {
	console.log("Server jalan di http://localhost:3000");
});

