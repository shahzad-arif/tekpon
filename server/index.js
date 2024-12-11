import express from "express";
import dotenv from "dotenv";
const app = express();

dotenv.config();

const port = process.env.PORT;

app.get("/", (req, res) => {
	res.send("I am running");
});
app.listen(port, () => {
	console.log(`Server runnning on ${port}`);
});
