import app from "./server";

app.listen(app.get("port"), () => {
  console.log(`The server running in: http://localhost:${app.get("port")}\n`);
  console.log("Press CTRL-C to stop\n");
});
