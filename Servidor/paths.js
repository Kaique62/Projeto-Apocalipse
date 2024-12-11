const path = require("path");

module.exports = {
    getPage: function (folder, file = "index.html") { //Retorna o Caminho das Paginas Principais || Folder = Pagina a ser lida || File
        return path.join(__dirname, `../Cliente/Paginas/${folder}/${file}`);
    },

    getImage: function (file) { //Retorna Caminho de uma determinada Imagem
        return path.join(__dirname, `../Cliente/Imagens/${folder}/${file}`);
    },

    getClient: function() {
        return path.join(__dirname, `../Cliente`);
    }
}