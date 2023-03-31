// Jogar a biblioteca em uma constante
const express = require('express');

// Criando um servidor web através do express
const app = express();

// Configurar a aplicação para receber dados no formato JSON
app.use(express.json());

// Configurando uma requisição com o método GET para a raiz da aplicação
app.get("/", function(req, res) {
    console.log("Primeira requisição recebida!"); // aparece no terminal
    res.status(200).json({message : "Resposta enviada em JSON"}); //aparece no navegador
});


app.get("/:categoria", (request, response) => { // é o msm q o function, só escrito de maneira diferente
    console.log(request.params.categoria);
    response.status(200).json({message : "Resposta enviada em JSON"});
});
 
/*
//  Guardando em  uma constante e dps imprimindo
app.get("/:categoria/:produto", (request, response) => { // é o msm q o function, só escrito de maneira diferente
 //   const produto = request.params.produto;
 //   const categoria = request.params.categoria;
    console.log(produto, categoria);
});
*/

// Guardando em  uma constante e dps imprimindo **DESESTRUTURAÇÃO**
app.get("/:categoria/:produto", (request, response) => { // é o msm q o function, só escrito de maneira diferente
       const {categoria, produto} = request.params; 
  //   response.status(200).json({message : "Categoria: " + categoria, message: "Produto: " + produto});
       response.status(200).json({categoria, produto}); // msm coisa do de cima
   });


//EXERCÍCIO - Criar uma nova rota/funcionalidade com método POST
//para receber uma informação pelo corpo da requisição
//testar api com método POST: POSTMAN, INSOMNIA e RESTCLIENT
app.post("/", (request, response) => {
    response.status(201).json({message: "Categoria cadastrada!", Categoria : request.body});
});

// O comando listen roda a aplicação
app.listen(3000, function(){
    console.clear();
    console.log("Aplicação rodando na porta 3000");
});