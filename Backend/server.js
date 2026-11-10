import app from "./src/app.js";
import connectDB from "./src/db/db.js";
import 'dotenv/config';

const port = 3000;
connectDB();

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});