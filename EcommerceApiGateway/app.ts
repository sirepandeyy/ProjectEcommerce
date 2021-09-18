
var authController = require('./Auth/AuthController')

var authMiddleware = require('./Auth/AuthMiddleware')

const express = require("express");
const https = require('https');
const fs2 = require('fs');
import axios from "axios";

const options = {
  key: fs2.readFileSync('private.key'),
  cert: fs2.readFileSync('certificate.crt'),
  ca: fs2.readFileSync('ca_bundle.crt')
};

const cors = require("cors");
const socketIo = require("socket.io");
import { Dictionary } from "dictionaryjs";
import { RequestModel } from "./submodules/Platform-Api-Gateway-Common/RequestModel";
import { SNS_SQS } from "./submodules/Platform-Api-Gateway-RabbitMQConfig/SNS_SQS";
let environment = process.env.NODE_ENV;
const port = 4000;
const bodyParser = require("body-parser");

const app = express();
const request = require('request');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.options("*", cors());
app.use(cors());
const server = https.createServer(options, app);

var sockets = [];

let activeConnectionDict = new Dictionary();
let socketAndDeviceDict = new Dictionary();


let configFileName = `config-${environment}`;


console.log(configFileName);
if (!environment) {
  console.log("no environment specified using default i.e local environment");
  configFileName = "config-local";
}


const pool_region = "ap-south-1";
const domainName = 'appclients'
const poolData = {
   UserPoolId: "ap-south-1_bnKgIgmbo",
   ClientId: "1lfoel71s4v9ao1qb7s446kfbd",
 };

var sns_sqs = SNS_SQS.getInstance();

const io = socketIo(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST", "HEAD", "OPTIONS", "PUT"],
    allowedHeaders: ["my-custom-header"],
    credentials: false,
  },
});



// app.get('/connectdevice/:id/:socketid', (req, res) => {
//   let deviceid = parseInt(req.params.id);

//   console.log(typeof deviceid);


//   let socketid = req.params.socketid;

//   if (socketAndDeviceDict.contains(deviceid) != true) {
//     socketAndDeviceDict.set(socketid, deviceid);
//     console.log("connected");

//     res.send("You're connected");

//   }
//   else {
//     for (

//       let [key, value] of socketAndDeviceDict.entries()) {
//       if (deviceid === value && socketid === key) {
//         res.send("Already connected");
//         console.log("Already Connected");

//       }
//       else { res.send("Cant Connect"); console.log("Cant Connect"); }
//     }
//   }



// });


io.on("connection", (socket) => {
  console.log("client connected with id: ", socket.id);

  // console.log("number of client connected : "+ String(activeConnectionDict.length));
  sockets.push(socket);

  

  var i = 0;

  activeConnectionDict.set(socket.id, socket);
  console.log("number of client connected : " + String(activeConnectionDict.length));

  activeConnectionDict.set(socket.id, socket);
  console.log("number of client connected : " + String(activeConnectionDict.length));


  socket.emit("socketIdFromServer", { socket_id: socket.id });
  socket.on("disconnect", () => {

    console.log("Client disconnected");
    // activeConnectionDict.remove(socket.id);
    activeConnectionDict.remove(socket.id);
    console.log("number of client connected : " + String(activeConnectionDict.length));

    if (socketAndDeviceDict.has(socket.id) === true) {

      activeConnectionDict.remove(socket.id);
      console.log("number of client connected : " + String(activeConnectionDict.length));

    }

    socketAndDeviceDict.remove(socket.id);

    socket.disconnect(true);


  });
});




var authority = ""; var userInfoEndPoint = ""; var emailid = "";
var middleware = {

configurationMiddleware: async (req:any, res:any, next)=>{
  let referer = req.headers["referer"];

  console.log("configurationMiddleware Endpoint is:" + `https://cognito-idp.${pool_region}.amazonaws.com/${poolData.UserPoolId}/.well-known/openid-configuration`);
  let getResult = await axios.get(
    `https://cognito-idp.${pool_region}.amazonaws.com/${poolData.UserPoolId}/.well-known/openid-configuration`,
    {
      headers: {
        Referer: referer,
      },
    }
  );


  

var data = getResult.data;

authority = data["issuer"];


  next();
},


openConfigurationMiddleware: async(req, res, next)=> {

  console.log("OpenConfigurationMiddleware Endpoint is: " + `${authority}/.well-known/openid-configuration`);
  let getResult = await axios.get(
    `${authority}/.well-known/openid-configuration`

  );
  var data = getResult.data;
  userInfoEndPoint = data["userinfo_endpoint"];




  next();
},


authenticationMiddleware: async function (req, res, next) {
  let authorization = req.headers["authorization"];

  console.log("AuthenticationMiddleware Endpoint is: " + `https://${domainName}.auth.${pool_region}.amazoncognito.com/oauth2/userInfo`);
  try {

    let getResult = await axios.get(
      `https://${domainName}.auth.${pool_region}.amazoncognito.com/oauth2/userInfo`,
      {
        headers: {
          Authorization:"Bearer "+authorization
        },
      }
    );
    var data = getResult.data;
    emailid = data["email"];

    console.log(" ======>>>>>>EMAIL DATTATATA"+ JSON.stringify(data))


    
   var request = require('request');
   const jwkToPem = require('jwk-to-pem')
   const jwt = require('jsonwebtoken')
   var token = req.headers['authorization']
   var flag=0
   request({
          url : `https://cognito-idp.${pool_region}.amazonaws.com/${poolData.UserPoolId}/.well-known/jwks.json`,
          json : true
       }, function(error, response, body){
          if (!error && response.statusCode === 200) {
             let pems = {};
              var keys = body['keys'];
              for(var i = 0; i < keys.length; i++) {
                   var key_id = keys[i].kid;
                   var modulus = keys[i].n;
                   var exponent = keys[i].e;
                   var key_type = keys[i].kty;
                   var jwk = { kty: key_type, n: modulus, e: exponent};
                   var pem = jwkToPem(jwk);
                   pems[key_id] = pem;
              }
              var decodedJwt = jwt.decode(token, {complete: true});
            
                   if (!decodedJwt) {
                       console.log("Not a valid JWT token");
                       res.status(401);
                       return res.send("Invalid token1");
                  }
               var kid = decodedJwt.header.kid;
           
                   var pem = pems[kid];
                 
                   if (!pem) {
                       console.log(pem +"=====>>"+ ' Invalid token2');
                       res.status(401);
                       return res.send("Invalid token");              
                   }
               jwt.verify(token, pem, function(err, payload) {
                
                       if(err) {
                           console.log("Invalid Token3.");
                           res.status(401);
                           return res.send("Invalid tokern");
                       } else {
                            console.log("Valid Token.");
                            flag=1
                       }
                  });
          } else {
                console.log("Error! Unable to download JWKs");
                res.status(500);
                return res.send("Error! Unable to download JWKs");
          }


         });

         console.log(getResult.data['email_verified'] + flag) 

setTimeout(()=>{
  if(getResult.data['email_verified'] == "true" && flag==1){
    console.log('CHECKED EMAIL VERIFIED AND VALID')  
    next();
  }
},500)

 
  }
  catch (e) { console.log(e) }
},


// authorizationMiddleware:async function(req,res,next){



//  next()


//       }

}


app.get("/:type", async (req: any, res: any) => {


  request('http://localhost:3002/'+req.params.type,  (error, response, body) => {
        if(error) {
            // If there is an error, tell the user 
            res.send('An erorr occured')
        }
        // Otherwise do something with the API data and send a response
        else {
            res.send(JSON.parse(body))
        }
    });

})


app.get("/:type/:id", async (req: any, res: any) => {

  request('http://localhost:3002/'+req.params.type+"/"+req.params.id,  (error, response, body) => {
        if(error) {
            // If there is an error, tell the user 
            res.send('An erorr occured')
        }
        // Otherwise do something with the API data and send a response
        else {
            res.send(JSON.parse(body))
        }
    });

})


app.post("/:servicename/:service", async (req: any, res: any) => {

  console.log("@@@@@@@@@@@@@")
  let type = {'user':1,'admin':2}
  let referer = req.headers["referer"];
  let requestBody: RequestModel<any> = req.body;
  let authorization = req.headers["authorization"];
  requestBody.CommunityUrl = referer;
requestBody.token = authorization
  let method_name = "POST";
  let service_name = req.params.servicename;
  let exchangeName = req.params.service + "_ADD";
  let id = 5;
  let message =JSON.stringify(requestBody)
  console.log(message);
  let data = req.body.DataCollection
 
  //if( data[0].role_id == type.admin){
    var myres = sns_sqs.publishMessageToTopics(
      service_name, //PRODUCT_SERVICE
      exchangeName, //PRODUCT_ADD
      method_name,
      message,
      id
    );   
  //}
  res.status(200).send({ message: "request has been taken" });

});


app.put("/:servicename/:service/:id",[middleware.configurationMiddleware, middleware.openConfigurationMiddleware, middleware.authenticationMiddleware], async (req, res) => {


  let requestBody: RequestModel<any> = req.body;
  let referer = req.headers["referer"];
  let authorization = req.headers["authorization"];
  requestBody.CommunityUrl = referer;
  requestBody.token = authorization;

  let method_name = "PUT";
  let service_name = req.params.servicename;
  let exchangeName = req.params.service + "_UPDATE";
  let id = req.params.id;
  let message = JSON.stringify(requestBody);

  sns_sqs.publishMessageToTopics(
    service_name,
    exchangeName,
    method_name,
    message, id
  );
  res.status(200).send({ message: "request has been taken" });
});

app.delete("/:servicename/:service/:id",[middleware.configurationMiddleware, middleware.openConfigurationMiddleware, middleware.authenticationMiddleware], async (req, res) => {

  console.log(req.params.id)
  let requestBody: RequestModel<any> = req.body;
  let referer = req.headers["referer"];
  let authorization = req.headers["authorization"];
  requestBody.CommunityUrl = referer;
  requestBody.token = authorization;
  let message = JSON.stringify(requestBody);
  console.log("message: ", message)
  let method_name = "DELETE";
  let id = req.params.id;
  let service_name = req.params.servicename;
  let exchangeName = req.params.service + "_DELETE";
  sns_sqs.publishMessageToTopics(
    service_name,
    exchangeName,
    method_name,
    message,
    id
  );
  res.status(200).send({ message: "request has been taken" });
});






server.listen(port, () => {
  console.log(process.env.IOT_SERVICE);
  var noOfSocket = 1;
  sns_sqs.listenToServices(noOfSocket, "API_GATEWAY_SERVICE", (result: { message: any; }) => {
    let { message } = result;
    console.log(message);
    //getting the browser socket to hom the response needs to be send
    let vSocket: any = activeConnectionDict.get(message.SocketId);
    // console.log("socket_id response: ", vSocket)
    if (vSocket) {
      console.log("response to client to call call back function", message);
      vSocket.emit("successResponseFromServer", message);
    }
    else{
      vSocket.emit("errorResponseFromServer", message);
    }
  });
  sns_sqs.listenToServices(noOfSocket, "ERROR_RECEIVER", (result: { message: any; }) => {
    let { message } = result;
    console.log(message);
    let vSocket: any = activeConnectionDict.get(message.SocketId);
    // console.log("socket_id response: ", vSocket)
    if (vSocket) {
      vSocket.emit("errorResponseFromServer", message);
    }
    else{
      vSocket.emit("errorResponseFromServer", message);
    }
  });
  console.log(`Listening on port ${port}`);
});


