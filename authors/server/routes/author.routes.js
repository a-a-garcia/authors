const AuthorsController = require('../controllers/author.controller');

module.exports = app => {
    app.get('/api/author', AuthorsController.getAllAuthors);
    app.get('/api/author/:id', AuthorsController.getOneAuthor);
    app.post('/api/author/new', AuthorsController.createAuthor);
    app.delete('/api/author/delete/:id', AuthorsController.deleteAuthor);
    app.patch('/api/author/edit/:id', AuthorsController.editAuthor);
}