const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const postsRouter = require('./routes/postsRouter');
const catsRouter = require('./routes/catsRouter');

require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/posts', postsRouter);
app.use('/api/cats', catsRouter);

app.listen(PORT, () => console.log(`Started on port ${PORT}`));
