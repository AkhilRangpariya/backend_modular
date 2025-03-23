// const { add } = require('./math');
// console.log(add(2, 3));
// // console.log('hello');

const http = require('http');

function myHandler(req, res) {
    if (req.url == '/favicon.ico') return res.end();

    switch (req.url) {
        case '/':
            if (req.method === 'GET') res.end('Home page data received.');
            break
        case '/about':
            if (req.method == 'GET') res.end('About page data received.');
            break;
        default:
            res.end('404 page not found');
    }
}

const myServer = http.createServer(myHandler);

myServer.listen(8000, () => console.log('Server are listing.'));