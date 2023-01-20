import express from "express";
import pkg from "body-parser";
const { urlencoded, json } = pkg;

import {} from "dotenv/config";
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import cron from'./utils/cron.js'

import routes from "./routes/index.js";

const app = express();
app.use(express.static('static'))

// Connect to MongoDB
import "./config/db.js";

// Use middlewares
app.use(urlencoded({ extended: true }));
app.use(json());

// Use routes
app.use("/api", routes);


app.get("/", (req, res) => {
// console.log(__dirname, "dirname");
  res.sendFile(path.join(__dirname, "/static/index.html"));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

cron.start();