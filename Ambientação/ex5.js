const num = Math.floor(Math.random() * 100);

console.log("Número escolhido: " + num);

let primeiro = 0, segundo = 1, proximo = 0;

while (proximo <= num) {
    console.log(proximo);
    primeiro = segundo;
    segundo = proximo;
    proximo = primeiro + segundo;
}