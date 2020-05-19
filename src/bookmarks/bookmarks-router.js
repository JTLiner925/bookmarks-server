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

  })

  bookmarksRouter
    .route('/bookmarks/:id')
    .get((req, res) => {

    })
    .delete((req, res) => {

    })
    module.exports = bookmarksRouter;