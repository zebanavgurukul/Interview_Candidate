const express = require("express");
const Apis = express();
const ApisDB   = require("../model/ApisDB")


Apis.post('/updata', (req, res) => {
    let updata = {
        Name: req.body.Name,
        Email: req.body.Email
    }
    ApisDB.candidates(updata)
    .then(() => {
        res.send("insert")
    }).catch((err) => {
        res.send(err)
    })
});

Apis.post('/scoreupdata', (req, res) => {
    let updata = {
        candidates_ID: req.body.candidates_ID,
        First_round: req.body.First_round,
        Second_round: req.body.Second_round,
        Third_round: req.body.Third_round
    }
    ApisDB.test_score(updata)
    .then(() => {
        res.send("insert")
    }).catch((err) => {
        res.send(err)
    })
});

Apis.get('/Allget',(req,res) => {
    ApisDB.Alldata()
    .then((Response) => {
        console.log(Response);
        index = 0;
        sum = 0;
        score = {};
        key = "";
        average_scores = 0;
        average_scores_list = [];

        for(index; index<Response.length; index++){
            dict = Response[index];
            sum = sum + dict["First_round"];
            sum = sum + dict["Second_round"];
            sum = sum + dict["Third_round"];
            average_scores = sum / 3
            key_number = index + 1
            key = key_number + "average"
            score[key] = average_scores;
            sum = 0;
            average_scores_list.push(average_scores)
        }

        var highest_average = 0;
        for(index = 0; index<average_scores_list.length; index++){
            if (average_scores_list[index] > highest_average){
                highest_average = average_scores_list[index]
            }
        }

        res.send({score,highest_average})
        }).catch((err) => {
        res.send(err)
    })
});

module.exports = Apis;



