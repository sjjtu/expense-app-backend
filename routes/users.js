const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
  User.find()
    .then(boards => res.json(boards))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/create').post((req, res) => {
    const name = req.body.name;
    const boards = [];
  
    const newUser = new User({
      name,
      boards,
    });
  
    newUser.save()
    .then(() => res.json('User created!'))
    .catch(err => res.status(400).json('Error: ' + err));
  });

router.route('/addboard/:id').post((req, res) => {
    User.findById(req.params.id)
      .then(user => {
        user.boards.push(req.body.boardId);

        board.save()
        .then(() => res.json(`Board ${req.body.boardId} added to User ${user.surname}.`))
        .catch(err => res.status(400).json("Error: " + error));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then(user => res.json(`User ${user.name} deleted.`))
        .catch(err => res.status(400).json('Error: ' + err));
    });

module.exports = router;