const express = require('express');
const router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

router.get('/', (req, res, next) => {
  res.render('index', { title: "Mini Messageboard", messages: messages })
});

router.post('/new', (req, res, next) => {
  const messageText = req.body.messageText;
  const authorName = req.body.authorName;
  messages.push({text: messageText, user: authorName, added: new Date()});
  res.redirect('/')
});

module.exports = router;
