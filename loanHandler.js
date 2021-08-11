const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


router.post('/', (req, res) => {
    console.log(req.body);
    res.end("Request sent");
});

app.listen(3000, () => {
    console.log(`app listening on port 3000`);
});

app.use("/", router);