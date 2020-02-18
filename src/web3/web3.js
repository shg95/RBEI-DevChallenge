const Web3 = require('web3');
const configData = require('../../constants.config')
const web3 = new Web3(new Web3.providers.HttpProvider(configData.blockchainEndPoint));
const contractAddress = configData.contractAddress;
const instance = new web3.eth.Contract(configData.contractABI, contractAddress);

class ethereum {
    constructor() { };
    registerUser(patientID, insuranceProviderId, registrationDate, pAge, sex, pDisease, callback) {
        const result = {}
        web3.eth.getAccounts().then((accounts) => {
            instance.methods.registerPatient(patientID, insuranceProviderId, new Date(registrationDate).getTime() / 1000,
                accounts[0], pAge, web3.utils.asciiToHex(sex), web3.utils.asciiToHex(pDisease)).send({ from: accounts[0], gas: 4700000 })
                .then(receipt => {
                    console.log("The patient has been registered for the health Tokens");
                    const response = {
                        status: "Success",
                        message: receipt
                    }
                    return callback(response);
                })
                .catch(err => {
                    const response = {
                        status: "Failure",
                        message: err
                    }
                    return callback(response);
                });
        });
        // console.log("The result is "+result);




    }


    incentiveAndPenalty(pId, monthlyAvg, weeklyAvg, callback) {
        const result = {}
        web3.eth.getAccounts().then((accounts) => {
            instance.methods.incentiveAndPenalty(pId, monthlyAvg, weeklyAvg).send({ from: accounts[0], gas: 4700000 })
                .then(receipt => {
                    const response = {
                        status: "Success",
                        message: receipt
                    }
                    return callback(response);
                })
                .catch(err => {
                    const response = {
                        status: "Failure",
                        message: err
                    }
                    return callback(response);
                });
        });
        //return Promise.resolve(result);

    }


    updateFootSteps(pId, steps, timeStamp, callback) {
        web3.eth.getAccounts().then((accounts) => {
            instance.methods.updateFootSteps(pId, steps, new Date(timeStamp).getTime() / 1000).send({ from: accounts[0], gas: 4700000 })
                .then(receipt => {
                    console.log("The Footsteps have been updated and please check the response for blockchain details")
                    const response = {
                        status: "Success",
                        message: receipt
                    }
                    return callback(response);
                })
                .catch(err => {
                    const response = {
                        status: "Failure",
                        message: err
                    }
                    return callback(response);
                });
        });



    }


    getBalances(pId, callback) {
        web3.eth.getAccounts().then((accounts) => {
            instance.methods.getBalances(pId).call({ from: accounts[0] })
                .then((balance) => {
                    //result.balance = balance;
                    console.log(balance);
                    const response = {
                        status: "Success",
                        message: balance
                    }
                    return callback(response);
                })
                .catch((err) => {
                    console.log(err);
                    const response = {
                        status: "Failure",
                        message: err
                    }
                    return callback(response);
                })

        });
    }

}

// getBalances(123).then(res => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });
// updateFootSteps(123, 6000, "2019.12.22").then(res => {
//     console.log(res);
// }).catch(err => {
//     console.log(err);
// });

// incentiveAndPenalty(123, 6000, 11000).then(res => {
//     console.log(res);
// }).catch(err => {
//     console.log(err);
// });

// registerUser(123, 231, "2019.12.22", 22, "Male", "hernia").then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });
module.exports = ethereum;