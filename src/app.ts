import express, { NextFunction, Request, Response } from "express";
import morganBody from "morgan-body";
import bodyParser from "body-parser";

import cors from "cors";

const app = express();

//IMPORT ROUTERS
import userRouter from "./routes/user.router";

// CORS configuration
app.use(
  cors({
    origin: process.env.CLIENT_ORIGIN || "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    credentials: true,
    allowedHeaders:
      "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
  }),
);

// Body parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.LOG_REQUEST_RESPONSE === "true") {
  //Morgan Body log request and response data
  app.use(bodyParser.json());

  // hook morganBody to express app
  morganBody(app, {
    logAllReqHeader: true,
    logAllResHeader: true,
  });
}
// ROUTES API

//USER
app.use("/user", userRouter);

// Health check endpoint
app.get("/health", (req: Request, res: Response) => {
  res.status(200).json({
    status: "ok",
    message: "Server is running",
    environment: process.env.NODE_ENV,
    timestamp: new Date().toISOString(),
  });
});

// 404
// Routes
// app.get("/", (req, res) => {
//   res.send("Secure Express Server");
// });

app.get("/", (_, res) => {
  res.send("DiHy Care API working!");
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ error: "Internal Server Error" });
});

export default app;
