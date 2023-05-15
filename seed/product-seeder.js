var Livro = require('../models/livro');

var mongoose = require('mongoose');

mongoose.connect("mongodb://144.22.234.139:27017/cc5m");


var livros = [
    new Livro({
        imagePath: 'https://m.media-amazon.com/images/I/71IxSpJOUtL._SX619_BO1,204,203,200_.jpg',
        title: 'One Piece',
        description: 'Melhor anime ja criado',
        price: 19
    }),
    new Livro({
        imagePath: 'https://a-static.mlcdn.com.br/800x560/livro-turma-da-monica-jovem-75/sintomaticalivraria/193360/c8596e2ff9ce98b810cd150298ee05d1.jpg',
        title: 'Turma da Monica Jovem',
        description: 'Historia de Maurício de Souza',
        price: 10
    }),
    new Livro({
        imagePath: 'https://a-static.mlcdn.com.br/800x560/livro-naruto-gold-vol-66/livrariavanguarda/287451/a63a393f7b63b0200f9ec297c398bbe7.jpg',
        title: 'Naruto',
        description: 'Historia de Masashi Kishimoto',
        price: 10
    }),
    new Livro({
        imagePath: 'https://comicvine.gamespot.com/a/uploads/scale_medium/13/136525/5977324-1.jpg',
        title: 'Hunter x Hunter',
        description: 'Historia de Yoshihiro Togashi',
        price: 10
    }),
    new Livro({
        imagePath: 'https://m.media-amazon.com/images/I/51HW0wQziGL.jpg',
        title: 'FullMetal Alchemist',
        description: 'Historia de Hiromu Arakawa',
        price: 10
    }),
    new Livro({
        imagePath: 'https://comicvine.gamespot.com/a/uploads/scale_medium/13/136525/5977324-1.jpg',
        title: 'Bleach',
        description: 'Historia de Tite Kubo',
        price: 10
    })
];

var done = 0;
for (var i = 0; i < livros.length; i++){
    livros[i].save(function(err, result) {
        done++;
        if (done === livros.length){
            exit();
        }
    });
}
function exit(){
    mongoose.disconnect();
}