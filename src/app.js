import express from "express";
import path from "path";
import cors from "cors";

const app = express();

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

app.use(
  cors({
    origin: process.env.CROSS_ORIGIN?.split(",") || "http://localhost:5173",
    credentials: true,
    methods: ["PATCH", "PUT", "DELETE", "GET", "POST", "OPTIONS"],
    allowedHeaders: ["Authorization", "Content-Type"],
  }),
);

app.get("/", (req, res) => {
  res.send("GOOD MORNING");
});
export default app;
