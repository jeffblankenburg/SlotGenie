'use strict';

var Alexa = require('alexa-sdk');
var AWS = require('aws-sdk');
var https = require('https');
var util = require('util');

const SNS = new AWS.SNS();
console.log("SNS INITIALIZED: " + JSON.stringify(SNS));
var APP_ID = undefined;  // TODO replace with your app ID (OPTIONAL).

var LOCATION_SLOTS = "1AkPCR28k45e1YW25MQ0GtzLKVT7s4J2cKQ4pdfgdIoM/values/Sheet1!A2:I200";

var handlers = {
    "LaunchRequest": function () {
        this.emit(":ask", "This is Slot Genie - the Built-In Slot Reference Guide.  What kind of slot are you looking for?", "This is Slot Genie - the Built-In Slot Type Reference Guide.  What kind of slot are you looking for?");
    },
    "SlotCheckIntent": function () {
        console.log("FULL REQUEST = " + JSON.stringify(this.event));
        
        var failFlag = false;
        if (this.event.request.intent.slots.slottype === undefined) failFlag = true;
        if (this.event.request.intent.slots.slottype.value === undefined) failFlag = true;
        if (this.event.request.intent.slots.slottype.resolutions === undefined) failFlag = true;
        
        if (!failFlag)
        {
            console.log("FAILFLAG == FALSE");
            var slotValue = this.event.request.intent.slots.slottype.value;
        
            if (this.event.request.intent.slots.slottype.resolutions.resolutionsPerAuthority[0].status.code === "ER_SUCCESS_MATCH")
            {
                httpsGet(LOCATION_SLOTS, (result) => {
                    console.log("RESULT = " + JSON.stringify(result));
                    var listLength = this.event.request.intent.slots.slottype.resolutions.resolutionsPerAuthority[0].values.length;
                    
                    if (listLength === 1)
                    {
                        var slotName = this.event.request.intent.slots.slottype.resolutions.resolutionsPerAuthority[0].values[0].value.name;
                        var response = "I found one potential match for " + slotName + ": ";
                        var slotData = result.values.find((slot) => { return slot[0].toUpperCase() === slotName.toUpperCase() });
                        response += "The built-in slot Amazon Dot " + slotData[5] + " " + slotData[1];
                        var slot = slotData[0];
                        this.emit(":askWithCard", response + getRandomPrompt(), response + getRandomPrompt(), slot, slotData[1]);
                        //this.emit(':askWithCard', speechOutput, repromptSpeech, cardTitle, cardContent, imageObj);
                    }
                    else if (listLength > 1)
                    {
                        var speechResponse = "There are several matching built-in slots for " + slotValue + ": Would you like to know more about ";
                        response = "";
                        for (var i = 0; i<listLength;i++)
                        {
                            var slotData = result.values.find((slot) => { return slot[0].toUpperCase() === this.event.request.intent.slots.slottype.resolutions.resolutionsPerAuthority[0].values[i].value.name.toUpperCase() });
                            speechResponse += "Amazon Dot " + slotData[5];
                            response += "\n" + slotData[0]
                            if (i <= (listLength-2)) speechResponse += ", ";
                            if (i===(listLength-2)) speechResponse += "or ";
                        }
                        speechResponse += "?";
                        this.emit(":askWithCard", speechResponse, speechResponse, "SEVERAL MATCHES FOR " + slotValue, response);
                    }
                });
            }
            else
            {
                sendSMS(slotValue, (result) => {
                    console.log("RETURNED FROM SMS.");
                    var response = "I don't know a built-in slot for " + slotValue + ".  You might want to consider building a custom slot for that. What other slot type can I help you with?";    
                    this.emit(":ask", response, response);
                });
            }
        }
        else
        {
            this.emit(":ask", "I'm sorry, I didn't hear what you were looking for.  What other slot type can I help you with?", "I'm sorry, I didn't hear what you were looking for.  What other slot type can I help you with?");
        }
    },
    "AMAZON.CancelIntent": function () {
        this.emit(':tell', "Goodbye.");
    },
    "AMAZON.HelpIntent": function () {
        this.emit("LaunchRequest");
    },
    "AMAZON.StopIntent": function () {
        this.emit(":tell", "Goodbye.");
    },
    "Unhandled": function() {
        
    }
};

exports.handler = function (event, context) {
    const alexa = Alexa.handler(event, context);
    alexa.appId = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

/*
function getSlotInfo(notThis, data, slotValue)
{
    if (listLength === 1)
    {
        var slotName = notThis.event.request.intent.slots.slottype.resolutions.resolutionsPerAuthority[0].values[0].value.name;
        //response.speech = "I found one potential match for " + slotValue + ": ";
        var slotData = data.values.find((slot) => { return slot[0].toUpperCase() === slotName.toUpperCase() });
        //response.speech += "The built-in slot Amazon Dot " + slotData[5] + " " + slotData[1]+ " What other slot type can I help you with?";
        //response.slotname = slotData[0];
        //httpsSet(slotData[6], slotData[7], (response) => {
            return slotData;
        //});
        
    }
    else if (listLength > 1)
    {
        response = "There are several matching built-in slots for " + slotValue + ": Would you like to know more about ";
        for (var i = 0; i<listLength;i++)
        {
            var slotData = data.values.find((slot) => { return slot[0].toUpperCase() === notThis.event.request.intent.slots.slottype.resolutions.resolutionsPerAuthority[0].values[i].value.name.toUpperCase() });
            response += "Amazon Dot " + slotData[5];
            if (i <= (listLength-2)) response += ", ";
            if (i===(listLength-2)) response += "or ";
        }
        response += "?";
        return response;
    }
}
*/

function getRandomPrompt()
{
    return " What other slot type can I help you with?";
}

function getRandom(min, max)
{
    return Math.floor(Math.random() * (max-min+1)+min);
}

function sendSMS(slotValue, callback)
{
    console.log("SENDING SMS.");
    const params = { PhoneNumber: "+16143275066", Message: "Slot Genie couldn't find a match for [" + slotValue + "]"};
    SNS.publish(params, function(err,data)
    {
        if (err) { console.log(err.stack);}
        else
        {
            console.log("TEXT MESSAGE SENT! [" + slotValue + "]");
        }
        callback(true);
    });
    
}

function httpsGet(location, callback) {
    var options = {
        host: "sheets.googleapis.com",
        port: 443,
        path: "/v4/spreadsheets/" + location + "?key=AIzaSyBjUvLoGzpnqBKxG3TF3wVCaMFRluvMbpU",
        method: 'GET',
    };

    console.log("PATH = " + options.host + options.path);

    var req = https.request(options, res => {
        res.setEncoding('utf8');
        var returnData = "";

        res.on('data', chunk => {
            returnData = returnData + chunk;
        });

        res.on('end', () => {
            var data = JSON.parse(returnData);
            //console.log("DATA = " + JSON.stringify(data));
            callback(data);
        });

    });
    req.end();

}

function httpsSet(count, id, callback)
{
    var counter = parseInt(count) + 1;
    
    var values = {
        "range": "Sheet1!G" + id,
        "majorDimension": "ROWS",
        "values": [[ counter ]]
    };
    
    console.log("VALUES = " + JSON.stringify(values));

    var options = {
        host: "sheets.googleapis.com",
        port: 443,
        json:true,
        body:values,
        path: "/v4/spreadsheets/1AkPCR28k45e1YW25MQ0GtzLKVT7s4J2cKQ4pdfgdIoM/values/Sheet1!G" + id + "?valueInputOption=RAW",
        method: 'GET'
    };
    
    var req = https.request(options, res => {
        res.setEncoding('utf8');
        var returnData = "";

        res.on('data', chunk => {
            returnData = returnData + chunk;
        });

        res.on('end', () => {
            //var data = JSON.parse(returnData);
            //console.log("DATA = " + JSON.stringify(data));
            callback(data);
        });

    });
    req.end();
    
    

}