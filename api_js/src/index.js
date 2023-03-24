const express = require('express');

// Criando um servidor web através do express
const app = express();

// Configurando uma requisição com o método GET para a raiz da aplicação
app.get("/", function(req, res) {
    console.log("Primeira requisição recebida!");
    res.status(200).json({message : "Resposta enviada em JSON"});
});

// O comando listen roda a aplicação
app.listen(3000, function(){
    console.clear();
    console.log("Aplicação rodando na porta 3000");
})