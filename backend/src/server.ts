import express from "express";
import cors from "cors";
import leadRoutes from "./routes/leadRoutes";
import dotenv from "dotenv";

const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());

app.get("/", async (_, res) => {
    res.json({
        message: "Welcome to the FluxoPay Sales Page API"
    })
});

app.use("/api/leads", leadRoutes);

app.listen(3001, () => {
    console.log("Server is running on port 3001");
})