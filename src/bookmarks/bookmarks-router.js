const express = require("express");
const { v4: uuid } = require('uuid');
const logger = require('../logger');
const { bookmark } = require('../store');

const bookmarksRouter = express.Router();
const bodyParser = express.json();

bookmarksRouter
  .route('/bookmarks')
  .get((req, res) => {
    res.json(bookmark);
  })
  .post(bodyParser, (req, res) => {
    const { title, url, description, rating} = req.body;
    if (!title) {
      logger.error(`Title is required`);
      return res.status(400).send("Invalid data");
    }

    if (!url) {
      logger.error(`url is required`);
      return res.status(400).send("Invalid data");
    }

    if (!description) {
      logger.error(`Description is required`);
      return res.status(400).send("Invalid data");
    }

    if (!rating) {
      logger.error(`Rating is required`);
      return res.status(400).send("Invalid data");
    }

    const id = uuid();

    const bookmarks = {
      id,
      title,
      url,
      description,
      rating
    };

    logger.info(`Bookmark with id ${id} created`);

    res
      .status(201)
      .location(`http://localhost:8000/bookmarks/${id}`)
      .json(bookmarks)
  })

  bookmarksRouter
    .route('/bookmarks/:id')
    .get((req, res) => {

    })
    .delete((req, res) => {

    })
    module.exports = bookmarksRouter;