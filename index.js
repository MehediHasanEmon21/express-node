const host = '127.0.0.1';
const port = 3001;
const http = require('http');
const fs = require('fs');

const app = http.createServer((req, res) => {

    const handleFile = (status, file) => {

        fs.readFile(file, (err, data) => {
            res.writeHead(status, {'Content-Type' : 'text/html'});
            res.write(data);
            res.end();
        })

    }

    if(req.url === '/'){
        handleFile(200, './views/index.html')
    }else if(req.url === '/about'){
        handleFile(200, './views/about.html')
    }else if(req.url === '/contact'){
        handleFile(200, './views/contact.html')
    }else{
        handleFile(404, './views/error.html')
    }

});

app.listen(port, host, () => {
    console.log(`server running on http://${host}:${port}` );
});

