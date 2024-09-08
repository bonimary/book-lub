const express = require('express');
const { Book, Category } = require('../db/models');

const router = express.Router();

router.route('/').get(async (req, res) => {
  try {
    const books = await Book.findAll({
      include: [{ model: Category }],
    });
    res.json(books);
  } catch (error) {
    res.status(500).send(error, 'All book error');
  }
});

// router.route('/').get(async (req, res) => {
//   try {
//     const books = await Book.findAll({
//       include: [{ model: Category }],
//     });
//     res.json(books);
//   } catch (error) {
//     console.error(error);
//     res.status(400).send({ message: 'Неправильный запрос' });
//   }
// });

router.route('/:id').get(async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findOne({
      where: { id },
      include: [{ model: Category }],
    });
    if (!book) {
      res.status(404).send({ message: 'Book not found' });
    } else {
      res.json(book);
    }
  } catch (error) {
    res.status(500).send(error, 'Find one error');
  }
});

router.route('/').post(async (req, res) => {
  try {
    const newBook = await Book.create(req.body);
    res.json(newBook);
  } catch (error) {
    res.status(500).send(error, 'Create error');
  }
});

router.route('/:id').delete(async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByPk(id);
    if (!book) {
      res.status(404).send({ message: 'Book not found' });
    } else {
      await book.destroy();
      res.sendStatus(200);
    }
  } catch (error) {
    res.status(500).send(error, 'Delete Book error');
  }
});

router.route('/:id').patch(async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByPk(id);
    if (!book) {
      res.status(404).send({ message: 'Book not found' });
    } else {
      await book.update(req.body);
      res.json(book);
    }
  } catch (error) {
    res.status(500).send(error, 'Edit Book error');
  }
});

module.exports = router;
