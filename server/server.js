const express = require("express");
const cors = require("cors");
require("./common/database")();
require("dotenv").config();

const app = express();

//request allow any domain
app.use(cors({ origin: "*" }));

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb" }));

//listen for request
const PORT = process.env.PORT || 5005;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// // Route files
// const product = require("./routes/Product");

// // Mount routers
// app.use("/api/v1/product", product);
