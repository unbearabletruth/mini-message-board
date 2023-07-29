const express = require('express');
const router = express.Router();

const convertedDate = () => {
  let date = new Date;
  let stringDate = date.toLocaleString('en-us', {
    month: "short",
    day: "2-digit",
    hour: "numeric", minute: "numeric"
  });
  return stringDate
}

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: convertedDate()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: convertedDate()
  }
];

router.get('/', (req, res, next) => {
  res.render('index', { title: "Mini Messageboard", messages: messages })
});

router.post('/new', (req, res, next) => {
  const messageText = req.body.messageText;
  const authorName = req.body.authorName;
  messages.push({text: messageText, user: authorName, 
    added: convertedDate()});
  res.redirect('/')
});

module.exports = router;
