const express = require("express");
const app= express();

app.get("/", (req, res) => {
	res.send("Hello World, backend hidup!");
});

app.listen(3000, ()=> {
	console.log("Server jalan di http://localhost:3000");
});

