import express from "express";
import cors from "cors";
import { createProxyMiddleware } from "http-proxy-middleware";

const app = express();

app.use(express.json());
app.use(cors());
app.use(
  "/main",
  createProxyMiddleware({
    target: "http://localhost:3001",
    changeOrigin: true,
    pathRewrite: { "^/main": "" },
  })
);

app.use(
  "/server",
  createProxyMiddleware({
    target: "http://localhost:3000/api",
    changeOrigin: true,
    pathRewrite: { "^/server": "" },
  })
);

app.get("/health", (req, res) => {
  res.status(200).json({ success: true, message: "hello from api gate way" });
});

export default app;
