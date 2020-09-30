import express from "express";
import cors from "cors";

import diaryRouter from "./routes/diaries";

const app = express();

// eslint-disable-next-line @typescript-eslint/no-unsafe-call
app.use(cors());
app.use(express.json());

app.get("/api/ping", (_req, res) => {
  res.send("PIIINNNGGGGGGGG!!!!!!!");
});

app.use("/api/diaries", diaryRouter);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
