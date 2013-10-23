/**
 * Created by Anders on 2013-10-21.
 */
var http = require("http");
var url=require("url");

function start(route, handle) {
    function onRequest(request, response) {
        var pathname=url.parse(request.url).pathname;
        console.log("Request " + pathname + " received");

        route(handle, pathname, response);
    }

    http.createServer(onRequest).listen(1337);
    console.log("Server started");
}

exports.start = start;