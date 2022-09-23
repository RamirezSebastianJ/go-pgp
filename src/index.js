const express = require("express");
const morgan = require("morgan");

const app = express();

//settings
app.set("port", process.env.port || 3000);
app.set("json spaces", 2);

//middlewars
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routes
app.use(require("./core/routes/router.js"));

//starting server
app.listen(app.get("port"), () => {
  console.log(`Server on port ${30000}`);
});
