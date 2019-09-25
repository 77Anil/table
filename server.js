const express = require('express')
const app = express()
var Request = require("request");

    app.get('/data', function (req, res) {
        Request.get({
            "headers": { "Authorization":"db36e02a50b57e081efe533a8a0f834b" },
            "url": "https://books.zoho.com/api/v3/organizations?organization_id=649249007"

        }, (error, response, body) => {
            if(error) {
           // console.log("test",error);
            res.json({data:error});

            }
            //console.log("called",JSON.parse(body));
            res.json({data:JSON.parse(body).organizations});

        });
    });




app.listen(5000, () => {
    console.log("Connected");
});