const express = require("express");

// swagger related imports and configs
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerDocument = YAML.load("./swagger.yaml");

const PORT = process.env.PORT || 8000;
const app = express();

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get("/", (req, res) => {
	res.send("<h1>Hello from LCO</h1>");
});

app.get("/facebook", (req, res) => {
	res.send("<h1> Facebook </h1>");
});

app.listen(PORT, () => {
	console.log(`Running on port ${PORT}`);
});
