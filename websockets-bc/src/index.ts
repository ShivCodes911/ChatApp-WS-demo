//This code is fully without the HTTP Server , Fully Websocket based

import {WebSocketServer} from "ws"; // import the Websocket Server

const wss =new WebSocketServer({port:8080});// intialing the instance of the Websocket server with the port 

//Event Handler 
// meaning whenever the Websocket Server gets the connection , send that connection to the beside function

wss.on("connection",(socket)=>{
    //socket here =>socket is the WebSocket connection between the server and one connected client.
   console.log("connection made successfully!");


   // message Handler 

   socket.on("message",(e)=>{ // socket.on ("msg")=> means this message is send by the cleint on the server 
    
    if(e.toString()==="ping"){
        socket.send("pong");
    }
   })
   
})

