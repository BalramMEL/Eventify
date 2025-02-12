import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import { connectDB } from "./lib/db.js";
import UserRoute from "./routes/user.route.js";
import EventRoute from "./routes/event.route.js";
import { app,server } from "./lib/socket.js";
import path from "path";


dotenv.config();


const PORT = process.env.PORT || 3000;
const __dirname = path.resolve();

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));
app.use(cookieParser());
app.use(cors({
    origin: process.env.NODE_ENV === "production"
        ? "https://eventify-frontend-livid.vercel.app"
        : "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true, // Allow cookies and credentials
}));
app.options("*", cors()); // Allow preflight requests for all routes

app.use("/api/user", UserRoute);
app.use("/api/events", EventRoute);

// if(process.env.NODE_ENV === 'production'){
//     app.use(express.static(path.join(__dirname,'../Frontend/dist')));
//     app.get('*',(req,res) => {
//         res.sendFile(path.join(__dirname,"../Frontend","dist","index.html"));
//     })
// }

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectDB();
});