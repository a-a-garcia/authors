const Author = require('../models/author.model');

module.exports = {

    getAllAuthors : (req, res) => {
        Author.find()
            .sort({name: 1})
            .then(authors => {
                res.status(200).json(authors);
            })
            .catch(err => {
                res.status(400).json({message:"Something went wrong.", error: err});
            });
    },

    createAuthor : (req, res) => {
        Author.create(req.body)
            .then(newAuthor => {
                res.status(200).json(newAuthor)
            })
            .catch(err => {
                res.status(400).json({message:"Something went wrong.", error: err});
            })
    },

    deleteAuthor : (req, res) => {
        Author.deleteOne({_id: req.params.id})
            .then(result => {
                res.status(200).json(result)
            })
            .catch(err => {
                res.status(400).json({message:"Something went wrong.", error: err})
            })
    },

    getOneAuthor : (req, res) => {
        Author.findOne({_id: req.params.id})
            .then(result=> {
                res.status(200).json(result)
            })
            .catch(err => {
                res.status(400).json({message:"Something went wrong.", error: err})
            })
    },
    
    editAuthor : (req, res) => {
        Author.findOneAndUpdate(
            {_id: req.params.id},
            req.body,
            {new: true, runValidators: true}
        )
            .then(result => {
                res.status(200).json(result)
            })
            .catch(err => {
                res.status(400).json({message:"Something went wrong.", error: err})
            })
    }
};
