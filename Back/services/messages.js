var admin = require("firebase-admin");
var express = require('express');
var router = express.Router();
var serviceAccount = require("xxxx");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "xxxx"
});

var database = admin.database();

//Guardar mensajes en la BD
router.post('/insertMessage', (req, res) =>{

    var refMessages = database.ref('/messages');
    var lastMessage = {};

    refMessages.push({
        name: req.body.name,
        date: new Date().toLocaleString(),
        text: req.body.text
    });

    refMessages.on("child_added", (data, prevChildKey) => {
        lastMessage = data.val();
    });
    res.json({name: lastMessage.name, message: lastMessage.text, date: lastMessage.date});
});

module.exports = router;