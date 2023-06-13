import "express-async-errors";
import express from "express";
import cors from 'cors';
import { routes } from "./routes";

const app = express();

app.use(express.json());
app.use(cors({ origin: "http://localhost:5173" }));

app.use(routes);

app.listen(3333, () => console.log("Server is running in port 3333! 🚀"));
