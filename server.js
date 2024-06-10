const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));



app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.get("/customer.html", function(req, res) {
    res.sendFile(__dirname + "/customer.html");
});

app.get("/index.html", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {

    res.send("thanks for sending your form");
});


app.listen(3000, function() {
    console.log("Server has started on port 3000");
});


function sendMoney() {
    var enterName = document.getElementById("enterName").value;
    var enterAmount = parseInt(document.getElementById("enterAmount").value);
    var enterSName = document.getElementById("enterSName").value;
    var findSenderBankAccount = enterSName + "BankBalance";
    var enterSAmount = parseInt(document.getElementById(findSenderBankAccount).innerHTML);
    if (enterAmount > enterSAmount) {
        alert("Insufficient Balance.");
    } else {
        var findUserBankAccount = enterName + "BankBalance";

        var finalAmount = parseInt(document.getElementById(findUserBankAccount).innerHTML) + enterAmount;
        var myAccountBalance = parseInt(document.getElementById(findSenderBankAccount).innerHTML) - enterAmount;
        document.getElementById(findSenderBankAccount).innerHTML = myAccountBalance;
        document.getElementById(findUserBankAccount).innerHTML = finalAmount;
        alert(`Successful Transaction !!  
       $${enterAmount} is sent to ${enterName}@gmail.com.`); 
    };
};