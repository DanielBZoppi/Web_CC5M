var express = require('express');
var router = express.Router();
var Livros = require('../models/livro');
var User = require("../models/user");
var Carrinho = require("../models/carrinho");


router.get('/node', function (req, res, next) {
    res.render('node');
})

router.get('/nodeb', function (req, res, next) {
    User.findOne({}, function (err, documents) {
        if (err) {
            return res.send("Error!")
        }
        res.render('node', {
            firstNameV: documents.firstName,
            lastNameV: documents.lastName,
            passwordV: documents.password,
            emailV: documents.email,
            messagesV: documents.messages,
        }
        )
    })
})

router.post('/node', function (req, res, next) {
    var emailVar = req.body.email;
    var userObject = new User({
        firstName: 'Harry',
        lastName: 'Potter',
        password: 'senha',
        email: emailVar
    })
    userObject.save();
    res.redirect('/node')
    console.log(req.body)
})

router.get('/', function (req, res, next) {
    res.render('index');
});

router.get('/login', function (req, res, next) {
    res.render('login');
});

router.get('/register', function (req, res, next) {
    res.render('register');
});

router.post('/register', function (req, res, next) {
    console.log(req.body)
});

router.get('/user', function (req, res, next) {
    res.render('user', { user: { name: "Harry" } });
});

router.get('/livros', function (req, res, next) {
    Livros.find({}, (err, documentos) => {
        if (err) {
            return res.status(500).json({
                myErrorTitle: "Um erro aconteceu na hora de salvar.",
                myError: e,
            });
        } else {
            return res.status(200).json({
                myMsgSucess: "Mensagem recuperada com sucesso.",
                books: documentos,
            });
        }
    });
});


router.post('/addLivro', async function (req, res, next) {
    //const itemId = req.params.id // _id
    console.log(req.body)

    try {
        Livros.findOne({ _id: req.body._id }, async (err, item) => {
            if (err) {
                console.error('Erro ao buscar o item:', err);
            } else {
                if (item) {

                    const carrinho = new Carrinho({
                        //characters: [{ type: Schema.Types.ObjectId, ref: 'Characters' }],
                        //genres: [{ type: Schema.Types.ObjectId, ref: 'Genres' }],
                        quantity: 1,
                        livro: req.body._id,
                    });

                    const userSaved = await carrinho.save();

                    return res.status(200).json({
                        myMsgSucess: "Livro recuperada com sucesso.",
                        mangas: carrinho,
                    });
                }
            }
        })
    } catch (e) {
        console.log(e)
        return res.status(500).json({
            myErrorTitle: "Um erro aconteceu na hora de salvar.",
            myError: e,
        });
    }
});

router.get('/carrinho', function (req, res, next) {
    Carrinho.find({}).populate('livro').exec((err, documento) => {
        if (err) {
            return res.status(500).json({
                myErrorTitle: "Um erro aconteceu na hora de salvar.",
                myError: err,
            });
        } else {
            console.log(documento)
            return res.status(200).json({
                myMsgSucess: "Livro recuperada com sucesso.",
                books: documento,
            });
        }
    });
});

router.delete("/deleteCarrinho/:id", async function (req, res) {
    const itemId = req.params.id
  
    try {
      Carrinho.findOneAndRemove({ _id: itemId }, (err, Livro) => {
        if (err) {
          res.status(500).json({ message: 'Erro ao excluir o Livro' });
        } else {
          if (Livro) {
            res.json({ message: 'Livro excluído com sucesso, atualize a pagina.' });
          } else {
            res.status(404).json({ message: 'Livro não encontrado' });
          }
        }
      });
    } catch (e) {
      return res.status(500).json({
        myErroTitle: "Um erro aconteceu na hora de buscar a mensagem",
        myError: e,
      });
    }
  });



module.exports = router; 
