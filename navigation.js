var http = require('http');
var fs = require('fs');
 var port = process.env.PORT || 5000;

 http.createServer(function (rep, res) {
     res.writeHead(200, {'Content-type': 'text/html'});

     var url =rep.url;
     if (url == '/home'){
        fs.readFile('Home.html',function (error,data){
             if (error != null){
                 res.end(error);
             }else {
                 res.write(data);
                 res.end();
             }
         })
     }else if (url == '/sign-up'){
         fs.readFile('SignUp.html',function (error,data){
             if (error != null){
                 res.end(error);
             }else {
                 res.write(data);
                 res.end();
             }
         })
     }else if (url == '/'){
         fs.readFile('Home.html',function (error,data){
             if (error != null){
                 res.end(error);
             }else {
                 res.write(data);
                 res.end();
             }
         })
     }else if (url == '/login'){
         fs.readFile('Login.html',function (error,data){
             if (error != null){
                 res.end(error);
             }else {
                 res.write(data);
                 res.end();
             }
         })
     }else {
         res.end("Not Page 404!");
     }
 }).listen(port);