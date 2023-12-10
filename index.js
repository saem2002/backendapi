import express from 'express';
import bodyParser from 'body-parser';
const app = express();
const PORT = process.env.PORT || 8000  ;
app.use(express.json());

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));


app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));