const ethereum = require("../web3/web3");
const eth = new ethereum();

class web3Controller {
    constructor() {
    };
    registerUser(req, res) {
        console.log(req.body.patientID,
            req.body.insuranceProviderId,
            req.body.registrationDate,
            req.body.pAge,
            req.body.sex,
            req.body.pDisease);
        eth.registerUser(req.body.patientID,
            req.body.insuranceProviderId,
            req.body.registrationDate,
            req.body.pAge,
            req.body.sex,
            req.body.pDisease, (result) => {
                res.json(result);
            })
    }

    incentiveAndPenalty(req, res) {
        eth.incentiveAndPenalty(req.body.pId,
            req.body.monthlyAvg,
            req.body.weeklyAvg, (result) => {
                res.json(result);
            })
    }

    updateFootSteps(req, res) {
        eth.updateFootSteps(req.body.pId,
            req.body.steps,
            req.body.timeStamp, (result) => {
                res.json(result);
            })

    }

    getBalances(req, res) {
        eth.getBalances(req.param('pId'), (result) => {
            console.log("The health tokens of the patient are :" + result.message);
            res.json(result);
        })
    }

}

module.exports = web3Controller;