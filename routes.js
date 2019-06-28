
const fs = require('fs');

const requestHandler = (req, res) => {
const url = req.url;
const method = req.method;

    if(url === '/'){
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();ß
    }

    if(req.url === '/message' && method === 'POST'){
        const body = [];
        req.on('data',(chunk) => {
            body.push(chunk);
        });
        return req.on('end', ()=> {
            const parseBody = Buffer.concat(body).toString();
            console.log(parseBody);
            fs.writeFile('message.txt',parseBody, (error)=>{
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
    }
        
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>First Page</title></head>');
    res.write('<body>Helloooo!!!!</body>');
    res.write('</html>');
    res.end();

};

// module.exports = {
//     handler : requestHandler,
//     someText = 'asdad'
// };

// module.exports.handler = requestHandler;
// module.exports.someText = 'asdasda';

exports.handler = requestHandler;
exports.someText = 'asdasd';