/**
 * Created by Anders on 2013-10-21.
 */
var http = require("http");
var url=require("url");

function start(route) {
    function onRequest(request, response) {
        var pathname=url.parse(request.url).pathname;

        route(pathname);

        console.log("Request " + pathname + " received")
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Hello world!");
        response.end();
    }

    http.createServer(onRequest).listen(1337);
    console.log("Server started");
}

exports.start = start;