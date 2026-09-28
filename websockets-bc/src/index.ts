//This code is fully without the HTTP Server , Fully Websocket based

import { WebSocketServer,WebSocket } from "ws"; // import the Websocket Server

const wss = new WebSocketServer({ port: 8080 }); // intialing the instance of the Websocket server with the port

let userCount=0;
let allSockets:WebSocket[]=[];

//Event Handler
// meaning whenever the Websocket Server gets the connection , send that connection to the beside function

// This will get call again and again , whenever the new user made the connection and a new socket variable is created
wss.on("connection", (socket) => {
  //socket here =>socket is the WebSocket connection between the server and one connected client.

  allSockets.push(socket);
  console.log("connection made successfully!");
  userCount++;
  console.log(`user connected # ${userCount}`);
  

  // message Handler



socket.on("message",(message)=>{ // socket.on ("msg")=> means this message is send by the cleint on the server
    console.log(`message Recieved ${message.toString()}`);
    for(let i = 0;i<allSockets.length;i++){
      const s=allSockets[i];
      s!.send(message.toString() +" sent from the :Server") // by socket.send we can send message from the server 

    }
  })

socket.on("close",()=>{
  userCount--;
  console.log(`User Disconnected : current Users = ${userCount}`);
  
})
});
