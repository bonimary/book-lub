const express = require('express');
const morgan = require('morgan');
const categotyRouter = require('./routes/categoryRouter');
const bookRouter = require('./routes/booksRouter');

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/categorys', categotyRouter);
app.use('/api/books', bookRouter);
