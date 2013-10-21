/**
 * Created by Anders on 2013-10-21.
 */
var server=require("./server");
var router=require("./router");

server.start(router.route);