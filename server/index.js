import express from "express";
import dotenv from "dotenv";
const app = express();

dotenv.config();

const port = process.env.PORT;

app.get("/", (req, res) => {
	res.send(`I am running on ${port}`);
});
app.listen(port, () => {
	console.log(`Server runnning on ${port}`);
});
