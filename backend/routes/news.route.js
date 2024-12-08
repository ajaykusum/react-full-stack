const {  getNews, } = require('../controllers/news.controller');
const express = require('express');

const router = express.Router();

router.route('/getnewsd')
    .get(getNews)
    // .post(updateNews)

// router.route('/:id')
//     .get(getUser)
//     .patch(updateUser)
//     .delete(deleteUser)

module.exports = router;