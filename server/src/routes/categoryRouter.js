const express = require('express');
const { Category } = require('../../db/models');

const router = express.Router();

router.route('/').get(async (req, res) => {
  try {
    const categorys = await Category.findAll();
    res.json(categorys);
  } catch (error) {
    res.status(500).send(error, 'Internal server error');
  }
});

router.route('/:id').get(async (req, res) => {
  try {
    const { id } = req.params;
    const category = await Category.findOne({ where: { id } });
    if (!category) {
      res.status(404).send({ message: 'Category not found' });
    } else {
      res.json(category);
    }
  } catch (error) {
    res.status(500).send(error, 'Internal server error');
  }
});

module.exports = router;
