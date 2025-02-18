import { configuration } from "./config/app.config";
import express, { json, urlencoded } from "express";
import helmet from "helmet";
import routes from "./routes";

const app = express();

app.set("port", configuration.PORT);
// Middlewares configuration
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(
  helmet({
    xssFilter: true,
    noSniff: true,
    hidePoweredBy: true,
    frameguard: { action: "deny" },
  }),
);

// Routes
app.use("/api/v1", routes);
export default app;
