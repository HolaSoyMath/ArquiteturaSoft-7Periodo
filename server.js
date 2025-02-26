import http from "http"

const PORT = 3000

const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-type": "text-plain"});
    res.end("API com Express e Node.js")
})

server.listen(PORT, () => {
    console.log('Servidor na escuta!');
})