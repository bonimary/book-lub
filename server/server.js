const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const categotyRouter = require('./routes/categoryRouter');
const bookRouter = require('./routes/booksRouter');
const authRouter = require('./routes/authRouter');
const tokensRouter = require('./routes/tokensRouter');

require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/categorys', categotyRouter);
app.use('/api/books', bookRouter);
app.use('/api/auth', authRouter);
app.use('/api/tokens', tokensRouter);

app.listen(PORT, () => console.log(`Started on port ${PORT}`));
