const http = require('http'); // requisição para peritir o módulo html
const fs = require('fs'); //módulo para ler arquivos
//Importa os módulos http e fs(ler arquivos) para o servidor
//createServer cria o servidor local (http://localhost.xxxx)
const server = http.createServer((req, res) => {
    //criando uma função de requisição e respostas em http
    if (req.url === '/') {
        //se a for solicitado / vai abrir o arquivo index.html
        fs.readFile('index.html', (err, data) => {
            if (err) { //caso de erro
                res.writeHead(500) //Menssagem de erro
                res.end("Erro Server"); //Mensagem Erro
            } else { // caso tudo ok
                res.writeHead(200);
                res.end(data); // retorna o index.html
            }
        });

    } else if (req.url === "/sobre") {
        //se a for solicitado /sobre vai abrir o arquivo index.html
        fs.readFile('sobre.html', (err, data) => {
            if (err) { //caso de erro
                res.writeHead(500) //Menssagem de erro
                res.end("Erro Server"); //Mensagem Erro
            } else { // caso tudo ok
                res.writeHead(200);
                res.end(data); // retorna o sobre.html
            }
        });
    } else {  //erro de página não encontrada
        res.writeHead(404); // erro padrão 404 
        res.end("Pagina não encontrada"); // mensagem de erro
    }
});
server.listen(3000, () => { //define a porta de conecção do servidor 
    console.log("Servidor conectado na porta 3000");
})